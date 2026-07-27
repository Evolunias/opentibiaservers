import Tibiaretro13LowExpServerKeywordPage, { generateMetadata } from './tibiaretro-13-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro13LowExpServerKeywordPage />;
}
