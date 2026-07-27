import Tibijka13RetroServerKeywordPage, { generateMetadata } from './tibijka-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka13RetroServerKeywordPage />;
}
