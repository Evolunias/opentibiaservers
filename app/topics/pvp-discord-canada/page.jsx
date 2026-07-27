import PvpDiscordCanadaKeywordPage, { generateMetadata } from './pvp-discord-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpDiscordCanadaKeywordPage />;
}
