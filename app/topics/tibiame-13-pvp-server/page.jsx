import Tibiame13PvpServerKeywordPage, { generateMetadata } from './tibiame-13-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame13PvpServerKeywordPage />;
}
