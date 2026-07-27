import NonPvpDiscordSwedenKeywordPage, { generateMetadata } from './non-pvp-discord-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpDiscordSwedenKeywordPage />;
}
