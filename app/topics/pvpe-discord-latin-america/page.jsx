import PvpeDiscordLatinAmericaKeywordPage, { generateMetadata } from './pvpe-discord-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeDiscordLatinAmericaKeywordPage />;
}
