import Neprenia12PvpServerKeywordPage, { generateMetadata } from './neprenia-12-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia12PvpServerKeywordPage />;
}
