import EvoDiscordGermanyKeywordPage, { generateMetadata } from './evo-discord-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoDiscordGermanyKeywordPage />;
}
