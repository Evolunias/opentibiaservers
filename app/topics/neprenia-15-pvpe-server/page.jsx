import Neprenia15PvpeServerKeywordPage, { generateMetadata } from './neprenia-15-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia15PvpeServerKeywordPage />;
}
