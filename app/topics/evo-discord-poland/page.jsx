import EvoDiscordPolandKeywordPage, { generateMetadata } from './evo-discord-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoDiscordPolandKeywordPage />;
}
