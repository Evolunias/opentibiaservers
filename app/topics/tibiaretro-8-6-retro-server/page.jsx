import Tibiaretro86RetroServerKeywordPage, { generateMetadata } from './tibiaretro-8-6-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro86RetroServerKeywordPage />;
}
