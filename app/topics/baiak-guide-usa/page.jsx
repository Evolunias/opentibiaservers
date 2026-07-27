import BaiakGuideUsaKeywordPage, { generateMetadata } from './baiak-guide-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakGuideUsaKeywordPage />;
}
