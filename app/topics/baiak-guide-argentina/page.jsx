import BaiakGuideArgentinaKeywordPage, { generateMetadata } from './baiak-guide-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakGuideArgentinaKeywordPage />;
}
