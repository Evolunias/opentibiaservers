import EvoDiscordMexicoKeywordPage, { generateMetadata } from './evo-discord-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoDiscordMexicoKeywordPage />;
}
