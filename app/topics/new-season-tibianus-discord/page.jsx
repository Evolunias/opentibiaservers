import NewSeasonTibianusDiscordKeywordPage, { generateMetadata } from './new-season-tibianus-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibianusDiscordKeywordPage />;
}
