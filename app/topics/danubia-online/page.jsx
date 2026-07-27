import DanubiaOnlineKeywordPage, { generateMetadata } from './danubia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DanubiaOnlineKeywordPage />;
}
