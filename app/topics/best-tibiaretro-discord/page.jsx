import BestTibiaretroDiscordKeywordPage, { generateMetadata } from './best-tibiaretro-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiaretroDiscordKeywordPage />;
}
