import OfficialCarlinotOnlineKeywordPage, { generateMetadata } from './official-carlinot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCarlinotOnlineKeywordPage />;
}
