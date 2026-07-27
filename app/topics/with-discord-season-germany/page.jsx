import WithDiscordSeasonGermanyKeywordPage, { generateMetadata } from './with-discord-season-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSeasonGermanyKeywordPage />;
}
