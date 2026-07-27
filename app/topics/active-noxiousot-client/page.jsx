import ActiveNoxiousotClientKeywordPage, { generateMetadata } from './active-noxiousot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNoxiousotClientKeywordPage />;
}
