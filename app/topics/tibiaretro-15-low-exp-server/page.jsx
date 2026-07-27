import Tibiaretro15LowExpServerKeywordPage, { generateMetadata } from './tibiaretro-15-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro15LowExpServerKeywordPage />;
}
