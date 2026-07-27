import NonPvpDiscordLatinAmericaKeywordPage, { generateMetadata } from './non-pvp-discord-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpDiscordLatinAmericaKeywordPage />;
}
