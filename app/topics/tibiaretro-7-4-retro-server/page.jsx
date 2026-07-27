import Tibiaretro74RetroServerKeywordPage, { generateMetadata } from './tibiaretro-7-4-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro74RetroServerKeywordPage />;
}
