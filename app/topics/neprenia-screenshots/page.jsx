import NepreniaScreenshotsKeywordPage, { generateMetadata } from './neprenia-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaScreenshotsKeywordPage />;
}
