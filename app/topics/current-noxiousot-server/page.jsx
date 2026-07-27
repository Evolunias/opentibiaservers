import CurrentNoxiousotServerKeywordPage, { generateMetadata } from './current-noxiousot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNoxiousotServerKeywordPage />;
}
