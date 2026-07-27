import Tibiaretro11WithScreenshotsServerKeywordPage, { generateMetadata } from './tibiaretro-11-with-screenshots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro11WithScreenshotsServerKeywordPage />;
}
