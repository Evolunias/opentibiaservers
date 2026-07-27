import TopBaiakIlusionKeywordPage, { generateMetadata } from './top-baiak-ilusion';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopBaiakIlusionKeywordPage />;
}
