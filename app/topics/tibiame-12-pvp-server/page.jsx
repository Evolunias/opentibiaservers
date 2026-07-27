import Tibiame12PvpServerKeywordPage, { generateMetadata } from './tibiame-12-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame12PvpServerKeywordPage />;
}
