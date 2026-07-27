import Canob13RetroServerKeywordPage, { generateMetadata } from './canob-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob13RetroServerKeywordPage />;
}
