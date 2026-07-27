import PytheraOnlineKeywordPage, { generateMetadata } from './pythera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PytheraOnlineKeywordPage />;
}
