import BaiakGuideEuropeKeywordPage, { generateMetadata } from './baiak-guide-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakGuideEuropeKeywordPage />;
}
