import Tibijka12PvpServerKeywordPage, { generateMetadata } from './tibijka-12-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka12PvpServerKeywordPage />;
}
