import OlderaOnlineKeywordPage, { generateMetadata } from './oldera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaOnlineKeywordPage />;
}
