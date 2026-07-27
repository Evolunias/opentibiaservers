import EvoDiscordSwedenKeywordPage, { generateMetadata } from './evo-discord-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoDiscordSwedenKeywordPage />;
}
