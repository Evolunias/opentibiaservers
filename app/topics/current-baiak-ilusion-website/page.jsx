import CurrentBaiakIlusionWebsiteKeywordPage, { generateMetadata } from './current-baiak-ilusion-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentBaiakIlusionWebsiteKeywordPage />;
}
