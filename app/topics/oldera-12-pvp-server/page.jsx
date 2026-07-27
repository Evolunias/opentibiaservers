import Oldera12PvpServerKeywordPage, { generateMetadata } from './oldera-12-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera12PvpServerKeywordPage />;
}
