import TibiaOtServerOnlineKeywordPage, { generateMetadata } from './tibia-ot-server-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaOtServerOnlineKeywordPage />;
}
