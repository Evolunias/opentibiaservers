import NewSeasonRubinotDiscordKeywordPage, { generateMetadata } from './new-season-rubinot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRubinotDiscordKeywordPage />;
}
