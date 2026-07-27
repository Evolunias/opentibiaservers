import ActiveSabrehavenOnlineKeywordPage, { generateMetadata } from './active-sabrehaven-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveSabrehavenOnlineKeywordPage />;
}
