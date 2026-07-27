import Tibiaretro84RetroServerKeywordPage, { generateMetadata } from './tibiaretro-8-4-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro84RetroServerKeywordPage />;
}
