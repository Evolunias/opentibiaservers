import PvpeDiscordEuropeKeywordPage, { generateMetadata } from './pvpe-discord-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeDiscordEuropeKeywordPage />;
}
