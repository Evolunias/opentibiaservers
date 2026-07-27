import Tibia12EvoDiscordKeywordPage, { generateMetadata } from './tibia-12-evo-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12EvoDiscordKeywordPage />;
}
