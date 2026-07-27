import CurrentBaiakIlusionGuideKeywordPage, { generateMetadata } from './current-baiak-ilusion-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentBaiakIlusionGuideKeywordPage />;
}
