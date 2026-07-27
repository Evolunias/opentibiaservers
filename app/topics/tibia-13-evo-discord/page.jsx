import Tibia13EvoDiscordKeywordPage, { generateMetadata } from './tibia-13-evo-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13EvoDiscordKeywordPage />;
}
