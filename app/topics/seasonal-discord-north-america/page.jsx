import SeasonalDiscordNorthAmericaKeywordPage, { generateMetadata } from './seasonal-discord-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalDiscordNorthAmericaKeywordPage />;
}
