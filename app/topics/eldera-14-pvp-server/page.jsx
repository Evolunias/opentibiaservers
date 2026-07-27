import Eldera14PvpServerKeywordPage, { generateMetadata } from './eldera-14-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera14PvpServerKeywordPage />;
}
