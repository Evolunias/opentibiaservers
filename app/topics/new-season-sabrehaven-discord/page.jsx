import NewSeasonSabrehavenDiscordKeywordPage, { generateMetadata } from './new-season-sabrehaven-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSabrehavenDiscordKeywordPage />;
}
