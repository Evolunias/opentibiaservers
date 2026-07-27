import ActiveBaiakIlusionServerKeywordPage, { generateMetadata } from './active-baiak-ilusion-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveBaiakIlusionServerKeywordPage />;
}
