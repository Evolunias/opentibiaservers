import OfficialDuraOnlineKeywordPage, { generateMetadata } from './official-dura-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialDuraOnlineKeywordPage />;
}
