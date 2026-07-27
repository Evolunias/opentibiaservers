import EvoDiscordEuropeKeywordPage, { generateMetadata } from './evo-discord-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoDiscordEuropeKeywordPage />;
}
