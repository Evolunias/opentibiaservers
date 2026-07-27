import TopSaintsotWikiKeywordPage, { generateMetadata } from './top-saintsot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopSaintsotWikiKeywordPage />;
}
