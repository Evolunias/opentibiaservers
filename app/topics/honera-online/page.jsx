import HoneraOnlineKeywordPage, { generateMetadata } from './honera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HoneraOnlineKeywordPage />;
}
