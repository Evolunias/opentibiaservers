import NewSeasonYurotsDiscordKeywordPage, { generateMetadata } from './new-season-yurots-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonYurotsDiscordKeywordPage />;
}
