import EvoDiscordArgentinaKeywordPage, { generateMetadata } from './evo-discord-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoDiscordArgentinaKeywordPage />;
}
