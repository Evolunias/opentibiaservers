import NewSeasonSerenityDiscordKeywordPage, { generateMetadata } from './new-season-serenity-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSerenityDiscordKeywordPage />;
}
