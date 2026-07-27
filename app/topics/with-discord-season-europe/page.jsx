import WithDiscordSeasonEuropeKeywordPage, { generateMetadata } from './with-discord-season-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSeasonEuropeKeywordPage />;
}
