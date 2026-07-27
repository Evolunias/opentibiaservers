import NewLumineraOnlineKeywordPage, { generateMetadata } from './new-luminera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewLumineraOnlineKeywordPage />;
}
