import Tibia14EvoDiscordKeywordPage, { generateMetadata } from './tibia-14-evo-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14EvoDiscordKeywordPage />;
}
