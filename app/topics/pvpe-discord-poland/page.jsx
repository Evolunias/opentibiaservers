import PvpeDiscordPolandKeywordPage, { generateMetadata } from './pvpe-discord-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeDiscordPolandKeywordPage />;
}
