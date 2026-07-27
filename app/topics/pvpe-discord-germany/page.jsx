import PvpeDiscordGermanyKeywordPage, { generateMetadata } from './pvpe-discord-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeDiscordGermanyKeywordPage />;
}
