import CustomBaiakIlusionWebsiteKeywordPage, { generateMetadata } from './custom-baiak-ilusion-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomBaiakIlusionWebsiteKeywordPage />;
}
