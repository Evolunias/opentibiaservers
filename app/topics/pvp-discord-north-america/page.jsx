import PvpDiscordNorthAmericaKeywordPage, { generateMetadata } from './pvp-discord-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpDiscordNorthAmericaKeywordPage />;
}
