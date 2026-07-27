import Canob80RetroServerKeywordPage, { generateMetadata } from './canob-8-0-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob80RetroServerKeywordPage />;
}
