import WithDiscordOlderaServerKeywordPage, { generateMetadata } from './with-discord-oldera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordOlderaServerKeywordPage />;
}
