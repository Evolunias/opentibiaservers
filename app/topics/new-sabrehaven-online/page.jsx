import NewSabrehavenOnlineKeywordPage, { generateMetadata } from './new-sabrehaven-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSabrehavenOnlineKeywordPage />;
}
