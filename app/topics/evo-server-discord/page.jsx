import EvoServerDiscordKeywordPage, { generateMetadata } from './evo-server-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoServerDiscordKeywordPage />;
}
