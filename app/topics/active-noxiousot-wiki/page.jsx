import ActiveNoxiousotWikiKeywordPage, { generateMetadata } from './active-noxiousot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNoxiousotWikiKeywordPage />;
}
