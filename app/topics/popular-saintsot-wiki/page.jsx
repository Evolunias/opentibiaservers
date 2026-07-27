import PopularSaintsotWikiKeywordPage, { generateMetadata } from './popular-saintsot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularSaintsotWikiKeywordPage />;
}
