import TopNoxiousotWikiKeywordPage, { generateMetadata } from './top-noxiousot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNoxiousotWikiKeywordPage />;
}
