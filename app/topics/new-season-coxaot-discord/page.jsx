import NewSeasonCoxaotDiscordKeywordPage, { generateMetadata } from './new-season-coxaot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCoxaotDiscordKeywordPage />;
}
