import Tibiaretro11LowExpServerKeywordPage, { generateMetadata } from './tibiaretro-11-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro11LowExpServerKeywordPage />;
}
