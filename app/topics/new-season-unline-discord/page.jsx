import NewSeasonUnlineDiscordKeywordPage, { generateMetadata } from './new-season-unline-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonUnlineDiscordKeywordPage />;
}
