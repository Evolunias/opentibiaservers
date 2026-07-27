import CurrentBaiakIlusionOtsKeywordPage, { generateMetadata } from './current-baiak-ilusion-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentBaiakIlusionOtsKeywordPage />;
}
