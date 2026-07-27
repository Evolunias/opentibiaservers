import PvpeDiscordArgentinaKeywordPage, { generateMetadata } from './pvpe-discord-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeDiscordArgentinaKeywordPage />;
}
