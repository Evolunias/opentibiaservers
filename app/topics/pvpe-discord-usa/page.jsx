import PvpeDiscordUsaKeywordPage, { generateMetadata } from './pvpe-discord-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeDiscordUsaKeywordPage />;
}
