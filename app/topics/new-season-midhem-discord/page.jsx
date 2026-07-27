import NewSeasonMidhemDiscordKeywordPage, { generateMetadata } from './new-season-midhem-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMidhemDiscordKeywordPage />;
}
