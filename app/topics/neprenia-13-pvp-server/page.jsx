import Neprenia13PvpServerKeywordPage, { generateMetadata } from './neprenia-13-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia13PvpServerKeywordPage />;
}
