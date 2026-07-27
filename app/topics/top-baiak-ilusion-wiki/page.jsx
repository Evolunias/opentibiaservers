import TopBaiakIlusionWikiKeywordPage, { generateMetadata } from './top-baiak-ilusion-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopBaiakIlusionWikiKeywordPage />;
}
