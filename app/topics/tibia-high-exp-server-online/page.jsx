import TibiaHighExpServerOnlineKeywordPage, { generateMetadata } from './tibia-high-exp-server-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaHighExpServerOnlineKeywordPage />;
}
