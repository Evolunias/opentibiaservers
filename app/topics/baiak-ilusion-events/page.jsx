import BaiakIlusionEventsKeywordPage, { generateMetadata } from './baiak-ilusion-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusionEventsKeywordPage />;
}
