import OfficialSaintsotOnlineKeywordPage, { generateMetadata } from './official-saintsot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialSaintsotOnlineKeywordPage />;
}
