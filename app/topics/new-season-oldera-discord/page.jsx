import NewSeasonOlderaDiscordKeywordPage, { generateMetadata } from './new-season-oldera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOlderaDiscordKeywordPage />;
}
