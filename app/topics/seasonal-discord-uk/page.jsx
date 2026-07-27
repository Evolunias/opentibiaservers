import SeasonalDiscordUkKeywordPage, { generateMetadata } from './seasonal-discord-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalDiscordUkKeywordPage />;
}
