import RealeraOnlineKeywordPage, { generateMetadata } from './realera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraOnlineKeywordPage />;
}
