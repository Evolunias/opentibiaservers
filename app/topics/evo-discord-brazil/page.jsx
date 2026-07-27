import EvoDiscordBrazilKeywordPage, { generateMetadata } from './evo-discord-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoDiscordBrazilKeywordPage />;
}
