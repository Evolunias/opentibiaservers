import NewSeasonMidhemOnlineKeywordPage, { generateMetadata } from './new-season-midhem-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMidhemOnlineKeywordPage />;
}
