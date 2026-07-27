import WithDiscordElderaPrivateServerKeywordPage, { generateMetadata } from './with-discord-eldera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordElderaPrivateServerKeywordPage />;
}
