import CustomMapBaiakIlusionServerKeywordPage, { generateMetadata } from './custom-map-baiak-ilusion-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapBaiakIlusionServerKeywordPage />;
}
