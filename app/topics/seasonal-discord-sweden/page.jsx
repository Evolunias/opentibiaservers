import SeasonalDiscordSwedenKeywordPage, { generateMetadata } from './seasonal-discord-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalDiscordSwedenKeywordPage />;
}
