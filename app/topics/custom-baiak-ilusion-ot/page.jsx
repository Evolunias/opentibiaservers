import CustomBaiakIlusionOtKeywordPage, { generateMetadata } from './custom-baiak-ilusion-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomBaiakIlusionOtKeywordPage />;
}
