import Tibiame15PvpServerKeywordPage, { generateMetadata } from './tibiame-15-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame15PvpServerKeywordPage />;
}
