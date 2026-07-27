import Tibia80EvoDiscordKeywordPage, { generateMetadata } from './tibia-8-0-evo-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80EvoDiscordKeywordPage />;
}
