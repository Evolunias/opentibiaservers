import PopularCyntaraOnlineKeywordPage, { generateMetadata } from './popular-cyntara-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCyntaraOnlineKeywordPage />;
}
