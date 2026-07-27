import SeasonalDiscordBrazilKeywordPage, { generateMetadata } from './seasonal-discord-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalDiscordBrazilKeywordPage />;
}
