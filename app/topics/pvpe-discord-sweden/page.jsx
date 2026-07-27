import PvpeDiscordSwedenKeywordPage, { generateMetadata } from './pvpe-discord-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeDiscordSwedenKeywordPage />;
}
