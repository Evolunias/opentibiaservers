import RetroDiscordBrazilKeywordPage, { generateMetadata } from './retro-discord-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroDiscordBrazilKeywordPage />;
}
