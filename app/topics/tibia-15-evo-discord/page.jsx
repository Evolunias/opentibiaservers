import Tibia15EvoDiscordKeywordPage, { generateMetadata } from './tibia-15-evo-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15EvoDiscordKeywordPage />;
}
