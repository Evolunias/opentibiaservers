import Canob14RetroServerKeywordPage, { generateMetadata } from './canob-14-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob14RetroServerKeywordPage />;
}
