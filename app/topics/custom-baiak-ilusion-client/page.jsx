import CustomBaiakIlusionClientKeywordPage, { generateMetadata } from './custom-baiak-ilusion-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomBaiakIlusionClientKeywordPage />;
}
