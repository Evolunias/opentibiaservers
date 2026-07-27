import Tibiaretro14RetroServerKeywordPage, { generateMetadata } from './tibiaretro-14-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro14RetroServerKeywordPage />;
}
