import Neprenia14PvpServerKeywordPage, { generateMetadata } from './neprenia-14-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia14PvpServerKeywordPage />;
}
