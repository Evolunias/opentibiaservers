import BaiakIlusionHighExpKeywordPage, { generateMetadata } from './baiak-ilusion-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusionHighExpKeywordPage />;
}
