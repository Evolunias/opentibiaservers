import HighrateBaiakIlusionWikiKeywordPage, { generateMetadata } from './highrate-baiak-ilusion-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateBaiakIlusionWikiKeywordPage />;
}
