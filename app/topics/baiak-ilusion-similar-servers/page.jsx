import BaiakIlusionSimilarServersKeywordPage, { generateMetadata } from './baiak-ilusion-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusionSimilarServersKeywordPage />;
}
