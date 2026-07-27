import NonPvpDiscordPolandKeywordPage, { generateMetadata } from './non-pvp-discord-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpDiscordPolandKeywordPage />;
}
