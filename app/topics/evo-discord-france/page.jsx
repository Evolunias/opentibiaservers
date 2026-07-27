import EvoDiscordFranceKeywordPage, { generateMetadata } from './evo-discord-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoDiscordFranceKeywordPage />;
}
