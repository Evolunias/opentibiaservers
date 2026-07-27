import Tibiaretro96RetroServerKeywordPage, { generateMetadata } from './tibiaretro-9-6-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro96RetroServerKeywordPage />;
}
