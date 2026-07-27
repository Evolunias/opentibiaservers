import NewSeasonThorniaDiscordKeywordPage, { generateMetadata } from './new-season-thornia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonThorniaDiscordKeywordPage />;
}
