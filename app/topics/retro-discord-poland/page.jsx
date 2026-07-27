import RetroDiscordPolandKeywordPage, { generateMetadata } from './retro-discord-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroDiscordPolandKeywordPage />;
}
