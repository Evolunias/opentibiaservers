import SeasonalDiscordGermanyKeywordPage, { generateMetadata } from './seasonal-discord-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalDiscordGermanyKeywordPage />;
}
