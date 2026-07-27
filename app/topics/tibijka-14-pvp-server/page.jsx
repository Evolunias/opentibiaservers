import Tibijka14PvpServerKeywordPage, { generateMetadata } from './tibijka-14-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka14PvpServerKeywordPage />;
}
