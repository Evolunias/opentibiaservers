import PvpDiscordLatinAmericaKeywordPage, { generateMetadata } from './pvp-discord-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpDiscordLatinAmericaKeywordPage />;
}
