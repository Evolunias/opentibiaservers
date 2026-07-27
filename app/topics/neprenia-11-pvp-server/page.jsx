import Neprenia11PvpServerKeywordPage, { generateMetadata } from './neprenia-11-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia11PvpServerKeywordPage />;
}
