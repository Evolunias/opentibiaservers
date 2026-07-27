import BaiakIlusionEuropeServerKeywordPage, { generateMetadata } from './baiak-ilusion-europe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusionEuropeServerKeywordPage />;
}
