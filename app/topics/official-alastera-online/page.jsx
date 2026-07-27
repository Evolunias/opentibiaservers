import OfficialAlasteraOnlineKeywordPage, { generateMetadata } from './official-alastera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialAlasteraOnlineKeywordPage />;
}
