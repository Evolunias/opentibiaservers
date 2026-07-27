import Tibiaretro15FreshStartServerKeywordPage, { generateMetadata } from './tibiaretro-15-fresh-start-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro15FreshStartServerKeywordPage />;
}
