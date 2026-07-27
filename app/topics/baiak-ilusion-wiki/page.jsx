import BaiakIlusionWikiKeywordPage, { generateMetadata } from './baiak-ilusion-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusionWikiKeywordPage />;
}
