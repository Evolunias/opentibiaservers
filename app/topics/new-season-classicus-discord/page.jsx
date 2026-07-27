import NewSeasonClassicusDiscordKeywordPage, { generateMetadata } from './new-season-classicus-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonClassicusDiscordKeywordPage />;
}
