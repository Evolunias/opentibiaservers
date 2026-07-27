import WithDiscordNtoStarPrivateServerKeywordPage, { generateMetadata } from './with-discord-nto-star-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNtoStarPrivateServerKeywordPage />;
}
