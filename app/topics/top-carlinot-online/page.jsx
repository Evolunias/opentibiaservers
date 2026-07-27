import TopCarlinotOnlineKeywordPage, { generateMetadata } from './top-carlinot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCarlinotOnlineKeywordPage />;
}
