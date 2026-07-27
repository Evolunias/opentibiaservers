import Neprenia15NonPvpServerKeywordPage, { generateMetadata } from './neprenia-15-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia15NonPvpServerKeywordPage />;
}
