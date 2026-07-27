import OtmadnessScreenshotsKeywordPage, { generateMetadata } from './otmadness-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessScreenshotsKeywordPage />;
}
