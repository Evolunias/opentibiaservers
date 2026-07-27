import Canob71RetroServerKeywordPage, { generateMetadata } from './canob-7-1-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob71RetroServerKeywordPage />;
}
