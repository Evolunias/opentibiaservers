import CurrentSabrehavenOnlineKeywordPage, { generateMetadata } from './current-sabrehaven-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentSabrehavenOnlineKeywordPage />;
}
