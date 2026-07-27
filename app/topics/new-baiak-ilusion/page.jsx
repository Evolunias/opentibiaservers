import NewBaiakIlusionKeywordPage, { generateMetadata } from './new-baiak-ilusion';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewBaiakIlusionKeywordPage />;
}
