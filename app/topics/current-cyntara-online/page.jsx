import CurrentCyntaraOnlineKeywordPage, { generateMetadata } from './current-cyntara-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCyntaraOnlineKeywordPage />;
}
