import TibiaCustomServerOnlineKeywordPage, { generateMetadata } from './tibia-custom-server-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaCustomServerOnlineKeywordPage />;
}
