import TopClassicusOnlineKeywordPage, { generateMetadata } from './top-classicus-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopClassicusOnlineKeywordPage />;
}
