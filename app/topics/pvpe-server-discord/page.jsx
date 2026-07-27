import PvpeServerDiscordKeywordPage, { generateMetadata } from './pvpe-server-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeServerDiscordKeywordPage />;
}
