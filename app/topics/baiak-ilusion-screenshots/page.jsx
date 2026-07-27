import BaiakIlusionScreenshotsKeywordPage, { generateMetadata } from './baiak-ilusion-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusionScreenshotsKeywordPage />;
}
