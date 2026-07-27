import EvoDiscordUsaKeywordPage, { generateMetadata } from './evo-discord-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoDiscordUsaKeywordPage />;
}
