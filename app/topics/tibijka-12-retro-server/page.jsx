import Tibijka12RetroServerKeywordPage, { generateMetadata } from './tibijka-12-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka12RetroServerKeywordPage />;
}
