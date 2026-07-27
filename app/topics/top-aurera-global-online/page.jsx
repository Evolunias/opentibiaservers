import TopAureraGlobalOnlineKeywordPage, { generateMetadata } from './top-aurera-global-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopAureraGlobalOnlineKeywordPage />;
}
