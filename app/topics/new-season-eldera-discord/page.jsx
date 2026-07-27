import NewSeasonElderaDiscordKeywordPage, { generateMetadata } from './new-season-eldera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonElderaDiscordKeywordPage />;
}
