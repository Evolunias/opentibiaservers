import TrimeraOnlineKeywordPage, { generateMetadata } from './trimera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrimeraOnlineKeywordPage />;
}
