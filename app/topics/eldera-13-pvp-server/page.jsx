import Eldera13PvpServerKeywordPage, { generateMetadata } from './eldera-13-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera13PvpServerKeywordPage />;
}
