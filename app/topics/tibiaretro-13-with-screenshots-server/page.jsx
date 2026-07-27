import Tibiaretro13WithScreenshotsServerKeywordPage, { generateMetadata } from './tibiaretro-13-with-screenshots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro13WithScreenshotsServerKeywordPage />;
}
