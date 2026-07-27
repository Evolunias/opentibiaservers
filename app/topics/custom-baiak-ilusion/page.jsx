import CustomBaiakIlusionKeywordPage, { generateMetadata } from './custom-baiak-ilusion';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomBaiakIlusionKeywordPage />;
}
