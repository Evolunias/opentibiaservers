import CustomBaiakIlusionTibiaKeywordPage, { generateMetadata } from './custom-baiak-ilusion-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomBaiakIlusionTibiaKeywordPage />;
}
