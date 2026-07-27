import Oldera11PvpServerKeywordPage, { generateMetadata } from './oldera-11-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera11PvpServerKeywordPage />;
}
