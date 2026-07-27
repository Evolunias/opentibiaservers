import SabrehavenOnlineKeywordPage, { generateMetadata } from './sabrehaven-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenOnlineKeywordPage />;
}
