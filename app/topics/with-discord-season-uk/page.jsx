import WithDiscordSeasonUkKeywordPage, { generateMetadata } from './with-discord-season-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSeasonUkKeywordPage />;
}
