import OfficialNoxiousotOnlineKeywordPage, { generateMetadata } from './official-noxiousot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNoxiousotOnlineKeywordPage />;
}
