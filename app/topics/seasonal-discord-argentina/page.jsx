import SeasonalDiscordArgentinaKeywordPage, { generateMetadata } from './seasonal-discord-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalDiscordArgentinaKeywordPage />;
}
