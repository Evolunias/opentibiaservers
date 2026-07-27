import NewSeasonBaiakIlusionWikiKeywordPage, { generateMetadata } from './new-season-baiak-ilusion-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonBaiakIlusionWikiKeywordPage />;
}
