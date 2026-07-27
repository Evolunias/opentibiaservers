import NewSeasonLumineraDiscordKeywordPage, { generateMetadata } from './new-season-luminera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonLumineraDiscordKeywordPage />;
}
