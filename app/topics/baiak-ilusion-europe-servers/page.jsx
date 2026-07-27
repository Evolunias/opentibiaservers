import BaiakIlusionEuropeServersKeywordPage, { generateMetadata } from './baiak-ilusion-europe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusionEuropeServersKeywordPage />;
}
