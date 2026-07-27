import WithDiscordAmeriaPrivateServerKeywordPage, { generateMetadata } from './with-discord-ameria-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordAmeriaPrivateServerKeywordPage />;
}
