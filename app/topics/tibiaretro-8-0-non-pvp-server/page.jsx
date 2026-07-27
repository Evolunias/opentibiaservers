import Tibiaretro80NonPvpServerKeywordPage, { generateMetadata } from './tibiaretro-8-0-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro80NonPvpServerKeywordPage />;
}
