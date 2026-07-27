import OpenTibiaServerListOnlineKeywordPage, { generateMetadata } from './open-tibia-server-list-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServerListOnlineKeywordPage />;
}
