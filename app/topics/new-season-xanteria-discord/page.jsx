import NewSeasonXanteriaDiscordKeywordPage, { generateMetadata } from './new-season-xanteria-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonXanteriaDiscordKeywordPage />;
}
