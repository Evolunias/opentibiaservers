import OfficialBaiakIlusionWebsiteKeywordPage, { generateMetadata } from './official-baiak-ilusion-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialBaiakIlusionWebsiteKeywordPage />;
}
