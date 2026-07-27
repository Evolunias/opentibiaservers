import RetroDiscordUkKeywordPage, { generateMetadata } from './retro-discord-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroDiscordUkKeywordPage />;
}
