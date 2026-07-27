import CurrentBaiakIlusionWikiKeywordPage, { generateMetadata } from './current-baiak-ilusion-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentBaiakIlusionWikiKeywordPage />;
}
