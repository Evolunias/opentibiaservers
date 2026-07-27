import HighrateSabrehavenOnlineKeywordPage, { generateMetadata } from './highrate-sabrehaven-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateSabrehavenOnlineKeywordPage />;
}
