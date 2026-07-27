import PvpeDiscordCanadaKeywordPage, { generateMetadata } from './pvpe-discord-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeDiscordCanadaKeywordPage />;
}
