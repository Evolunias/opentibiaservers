import Tibiaretro81RetroServerKeywordPage, { generateMetadata } from './tibiaretro-8-1-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro81RetroServerKeywordPage />;
}
