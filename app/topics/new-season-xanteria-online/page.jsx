import NewSeasonXanteriaOnlineKeywordPage, { generateMetadata } from './new-season-xanteria-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonXanteriaOnlineKeywordPage />;
}
