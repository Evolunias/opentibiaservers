import MadnessaliveScreenshotsKeywordPage, { generateMetadata } from './madnessalive-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessaliveScreenshotsKeywordPage />;
}
