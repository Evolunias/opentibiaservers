import FreshStartBaiakIlusionWikiKeywordPage, { generateMetadata } from './fresh-start-baiak-ilusion-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartBaiakIlusionWikiKeywordPage />;
}
