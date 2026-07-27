import Tibiaretro86LowExpServerKeywordPage, { generateMetadata } from './tibiaretro-8-6-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro86LowExpServerKeywordPage />;
}
