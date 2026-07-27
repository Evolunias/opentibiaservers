import BaiakGuideCanadaKeywordPage, { generateMetadata } from './baiak-guide-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakGuideCanadaKeywordPage />;
}
