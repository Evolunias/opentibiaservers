import Tibiaretro14LowExpServerKeywordPage, { generateMetadata } from './tibiaretro-14-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro14LowExpServerKeywordPage />;
}
