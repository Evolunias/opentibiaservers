import CustomBaiakIlusionOpenTibiaKeywordPage, { generateMetadata } from './custom-baiak-ilusion-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomBaiakIlusionOpenTibiaKeywordPage />;
}
