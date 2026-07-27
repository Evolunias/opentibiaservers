import KasteriaWithScreenshotsServerPolandKeywordPage, { generateMetadata } from './kasteria-with-screenshots-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaWithScreenshotsServerPolandKeywordPage />;
}
