import Tibiame14PvpServerKeywordPage, { generateMetadata } from './tibiame-14-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame14PvpServerKeywordPage />;
}
