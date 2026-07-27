import BaiakGuideNorthAmericaKeywordPage, { generateMetadata } from './baiak-guide-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakGuideNorthAmericaKeywordPage />;
}
