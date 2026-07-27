import NtoStarScreenshotsKeywordPage, { generateMetadata } from './nto-star-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarScreenshotsKeywordPage />;
}
