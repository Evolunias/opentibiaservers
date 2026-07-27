import NewSeasonEvoluniaDiscordKeywordPage, { generateMetadata } from './new-season-evolunia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonEvoluniaDiscordKeywordPage />;
}
