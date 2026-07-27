import Neprenia15PvpServerKeywordPage, { generateMetadata } from './neprenia-15-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia15PvpServerKeywordPage />;
}
