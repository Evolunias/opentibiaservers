import Tibiaretro15HighExpServerKeywordPage, { generateMetadata } from './tibiaretro-15-high-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro15HighExpServerKeywordPage />;
}
