import EvoDiscordUkKeywordPage, { generateMetadata } from './evo-discord-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoDiscordUkKeywordPage />;
}
