import WithDiscordNtoStarDiscordKeywordPage, { generateMetadata } from './with-discord-nto-star-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNtoStarDiscordKeywordPage />;
}
