import Tibiaretro15WithScreenshotsServerKeywordPage, { generateMetadata } from './tibiaretro-15-with-screenshots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro15WithScreenshotsServerKeywordPage />;
}
