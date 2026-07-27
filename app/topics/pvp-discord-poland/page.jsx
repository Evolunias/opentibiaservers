import PvpDiscordPolandKeywordPage, { generateMetadata } from './pvp-discord-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpDiscordPolandKeywordPage />;
}
