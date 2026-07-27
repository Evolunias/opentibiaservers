import BaiakGuideGermanyKeywordPage, { generateMetadata } from './baiak-guide-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakGuideGermanyKeywordPage />;
}
