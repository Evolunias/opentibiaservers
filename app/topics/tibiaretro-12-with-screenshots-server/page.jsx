import Tibiaretro12WithScreenshotsServerKeywordPage, { generateMetadata } from './tibiaretro-12-with-screenshots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro12WithScreenshotsServerKeywordPage />;
}
