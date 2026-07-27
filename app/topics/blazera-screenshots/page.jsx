import BlazeraScreenshotsKeywordPage, { generateMetadata } from './blazera-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraScreenshotsKeywordPage />;
}
