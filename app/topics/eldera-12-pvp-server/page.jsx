import Eldera12PvpServerKeywordPage, { generateMetadata } from './eldera-12-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera12PvpServerKeywordPage />;
}
