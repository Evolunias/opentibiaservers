import PopularBaiakIlusionKeywordPage, { generateMetadata } from './popular-baiak-ilusion';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularBaiakIlusionKeywordPage />;
}
