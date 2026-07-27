import FreshStartLumineraOnlineKeywordPage, { generateMetadata } from './fresh-start-luminera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartLumineraOnlineKeywordPage />;
}
