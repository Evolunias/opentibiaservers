import NewBaiakIlusionWikiKeywordPage, { generateMetadata } from './new-baiak-ilusion-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewBaiakIlusionWikiKeywordPage />;
}
