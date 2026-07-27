import ActiveBaiakIlusionKeywordPage, { generateMetadata } from './active-baiak-ilusion';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveBaiakIlusionKeywordPage />;
}
