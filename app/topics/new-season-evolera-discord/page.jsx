import NewSeasonEvoleraDiscordKeywordPage, { generateMetadata } from './new-season-evolera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonEvoleraDiscordKeywordPage />;
}
