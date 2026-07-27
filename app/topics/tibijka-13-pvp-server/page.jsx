import Tibijka13PvpServerKeywordPage, { generateMetadata } from './tibijka-13-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka13PvpServerKeywordPage />;
}
