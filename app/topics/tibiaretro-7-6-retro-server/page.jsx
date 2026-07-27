import Tibiaretro76RetroServerKeywordPage, { generateMetadata } from './tibiaretro-7-6-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro76RetroServerKeywordPage />;
}
