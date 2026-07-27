import BaiakGuideSwedenKeywordPage, { generateMetadata } from './baiak-guide-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakGuideSwedenKeywordPage />;
}
