import OfficialSabrehavenOnlineKeywordPage, { generateMetadata } from './official-sabrehaven-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialSabrehavenOnlineKeywordPage />;
}
