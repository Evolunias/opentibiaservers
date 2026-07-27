import IsaraOnlineKeywordPage, { generateMetadata } from './isara-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <IsaraOnlineKeywordPage />;
}
