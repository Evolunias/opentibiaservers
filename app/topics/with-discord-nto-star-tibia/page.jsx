import WithDiscordNtoStarTibiaKeywordPage, { generateMetadata } from './with-discord-nto-star-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNtoStarTibiaKeywordPage />;
}
