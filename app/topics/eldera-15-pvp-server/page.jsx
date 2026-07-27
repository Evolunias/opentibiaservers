import Eldera15PvpServerKeywordPage, { generateMetadata } from './eldera-15-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera15PvpServerKeywordPage />;
}
