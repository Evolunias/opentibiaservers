import Canob11RetroServerKeywordPage, { generateMetadata } from './canob-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob11RetroServerKeywordPage />;
}
