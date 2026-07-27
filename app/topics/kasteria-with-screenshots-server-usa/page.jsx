import KasteriaWithScreenshotsServerUsaKeywordPage, { generateMetadata } from './kasteria-with-screenshots-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaWithScreenshotsServerUsaKeywordPage />;
}
