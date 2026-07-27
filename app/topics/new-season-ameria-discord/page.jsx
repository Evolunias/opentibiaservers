import NewSeasonAmeriaDiscordKeywordPage, { generateMetadata } from './new-season-ameria-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonAmeriaDiscordKeywordPage />;
}
