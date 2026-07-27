import CustomBaiakIlusionServerKeywordPage, { generateMetadata } from './custom-baiak-ilusion-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomBaiakIlusionServerKeywordPage />;
}
