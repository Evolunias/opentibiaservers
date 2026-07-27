import EvoDiscordCanadaKeywordPage, { generateMetadata } from './evo-discord-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoDiscordCanadaKeywordPage />;
}
