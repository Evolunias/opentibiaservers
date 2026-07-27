import NewSeasonTibiascapeDiscordKeywordPage, { generateMetadata } from './new-season-tibiascape-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiascapeDiscordKeywordPage />;
}
