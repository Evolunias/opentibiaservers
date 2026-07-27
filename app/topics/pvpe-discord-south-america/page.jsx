import PvpeDiscordSouthAmericaKeywordPage, { generateMetadata } from './pvpe-discord-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeDiscordSouthAmericaKeywordPage />;
}
