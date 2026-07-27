import Tibiame11PvpServerKeywordPage, { generateMetadata } from './tibiame-11-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame11PvpServerKeywordPage />;
}
