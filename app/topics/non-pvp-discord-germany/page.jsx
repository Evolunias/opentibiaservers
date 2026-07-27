import NonPvpDiscordGermanyKeywordPage, { generateMetadata } from './non-pvp-discord-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpDiscordGermanyKeywordPage />;
}
