import NewSeasonMediviaDiscordKeywordPage, { generateMetadata } from './new-season-medivia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMediviaDiscordKeywordPage />;
}
