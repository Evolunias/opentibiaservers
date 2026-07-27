import Neprenia11NonPvpServerKeywordPage, { generateMetadata } from './neprenia-11-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia11NonPvpServerKeywordPage />;
}
