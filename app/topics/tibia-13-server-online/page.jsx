import Tibia13ServerOnlineKeywordPage, { generateMetadata } from './tibia-13-server-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13ServerOnlineKeywordPage />;
}
