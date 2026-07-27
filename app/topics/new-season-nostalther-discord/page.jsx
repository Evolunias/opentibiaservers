import NewSeasonNostaltherDiscordKeywordPage, { generateMetadata } from './new-season-nostalther-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNostaltherDiscordKeywordPage />;
}
