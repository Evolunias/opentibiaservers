import Tibiaretro11HighExpServerKeywordPage, { generateMetadata } from './tibiaretro-11-high-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro11HighExpServerKeywordPage />;
}
