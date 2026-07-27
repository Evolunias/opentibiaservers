import SeasonalDiscordUsaKeywordPage, { generateMetadata } from './seasonal-discord-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalDiscordUsaKeywordPage />;
}
