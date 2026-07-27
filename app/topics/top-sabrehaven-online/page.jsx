import TopSabrehavenOnlineKeywordPage, { generateMetadata } from './top-sabrehaven-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopSabrehavenOnlineKeywordPage />;
}
