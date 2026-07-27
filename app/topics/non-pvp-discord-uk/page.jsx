import NonPvpDiscordUkKeywordPage, { generateMetadata } from './non-pvp-discord-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpDiscordUkKeywordPage />;
}
