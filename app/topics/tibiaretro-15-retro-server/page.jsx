import Tibiaretro15RetroServerKeywordPage, { generateMetadata } from './tibiaretro-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro15RetroServerKeywordPage />;
}
