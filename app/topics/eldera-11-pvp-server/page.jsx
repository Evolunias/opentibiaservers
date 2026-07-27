import Eldera11PvpServerKeywordPage, { generateMetadata } from './eldera-11-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera11PvpServerKeywordPage />;
}
