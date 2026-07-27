import HighrateSaintsotOnlineKeywordPage, { generateMetadata } from './highrate-saintsot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateSaintsotOnlineKeywordPage />;
}
