import SeasonalDiscordMexicoKeywordPage, { generateMetadata } from './seasonal-discord-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalDiscordMexicoKeywordPage />;
}
