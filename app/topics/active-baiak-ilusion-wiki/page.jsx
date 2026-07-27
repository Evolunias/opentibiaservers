import ActiveBaiakIlusionWikiKeywordPage, { generateMetadata } from './active-baiak-ilusion-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveBaiakIlusionWikiKeywordPage />;
}
