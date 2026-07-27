import PvpDiscordBrazilKeywordPage, { generateMetadata } from './pvp-discord-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpDiscordBrazilKeywordPage />;
}
