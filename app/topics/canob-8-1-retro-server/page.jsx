import Canob81RetroServerKeywordPage, { generateMetadata } from './canob-8-1-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob81RetroServerKeywordPage />;
}
