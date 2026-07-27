import PvpeDiscordBrazilKeywordPage, { generateMetadata } from './pvpe-discord-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeDiscordBrazilKeywordPage />;
}
