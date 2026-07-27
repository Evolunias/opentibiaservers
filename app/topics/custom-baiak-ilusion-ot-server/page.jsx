import CustomBaiakIlusionOtServerKeywordPage, { generateMetadata } from './custom-baiak-ilusion-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomBaiakIlusionOtServerKeywordPage />;
}
