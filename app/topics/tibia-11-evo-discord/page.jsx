import Tibia11EvoDiscordKeywordPage, { generateMetadata } from './tibia-11-evo-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11EvoDiscordKeywordPage />;
}
