import CurrentNoxiousotClientKeywordPage, { generateMetadata } from './current-noxiousot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNoxiousotClientKeywordPage />;
}
