import ActiveLumineraOnlineKeywordPage, { generateMetadata } from './active-luminera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveLumineraOnlineKeywordPage />;
}
