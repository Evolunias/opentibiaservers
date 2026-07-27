import CurrentAlasteraOnlineKeywordPage, { generateMetadata } from './current-alastera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentAlasteraOnlineKeywordPage />;
}
