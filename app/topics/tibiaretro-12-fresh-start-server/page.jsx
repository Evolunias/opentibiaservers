import Tibiaretro12FreshStartServerKeywordPage, { generateMetadata } from './tibiaretro-12-fresh-start-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro12FreshStartServerKeywordPage />;
}
