import NewSeasonLumineraOnlineKeywordPage, { generateMetadata } from './new-season-luminera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonLumineraOnlineKeywordPage />;
}
