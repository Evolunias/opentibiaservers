import Tibiaretro11FreshStartServerKeywordPage, { generateMetadata } from './tibiaretro-11-fresh-start-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro11FreshStartServerKeywordPage />;
}
