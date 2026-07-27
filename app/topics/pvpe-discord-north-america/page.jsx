import PvpeDiscordNorthAmericaKeywordPage, { generateMetadata } from './pvpe-discord-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeDiscordNorthAmericaKeywordPage />;
}
