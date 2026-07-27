import NewBaiakIlusionServerKeywordPage, { generateMetadata } from './new-baiak-ilusion-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewBaiakIlusionServerKeywordPage />;
}
