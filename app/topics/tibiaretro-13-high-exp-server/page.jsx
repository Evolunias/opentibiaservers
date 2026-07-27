import Tibiaretro13HighExpServerKeywordPage, { generateMetadata } from './tibiaretro-13-high-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro13HighExpServerKeywordPage />;
}
