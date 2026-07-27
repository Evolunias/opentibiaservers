import NonPvpDiscordEuropeKeywordPage, { generateMetadata } from './non-pvp-discord-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpDiscordEuropeKeywordPage />;
}
