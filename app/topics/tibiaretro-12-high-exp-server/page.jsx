import Tibiaretro12HighExpServerKeywordPage, { generateMetadata } from './tibiaretro-12-high-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro12HighExpServerKeywordPage />;
}
