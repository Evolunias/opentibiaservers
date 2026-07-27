import PopularBaiakIlusionTibiaKeywordPage, { generateMetadata } from './popular-baiak-ilusion-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularBaiakIlusionTibiaKeywordPage />;
}
