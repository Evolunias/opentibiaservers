import BaiakGuideLatinAmericaKeywordPage, { generateMetadata } from './baiak-guide-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakGuideLatinAmericaKeywordPage />;
}
