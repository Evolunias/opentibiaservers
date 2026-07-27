import NonPvpDiscordArgentinaKeywordPage, { generateMetadata } from './non-pvp-discord-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpDiscordArgentinaKeywordPage />;
}
