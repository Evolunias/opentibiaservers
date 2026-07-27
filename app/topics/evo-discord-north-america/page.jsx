import EvoDiscordNorthAmericaKeywordPage, { generateMetadata } from './evo-discord-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoDiscordNorthAmericaKeywordPage />;
}
