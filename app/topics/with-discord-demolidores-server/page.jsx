import WithDiscordDemolidoresServerKeywordPage, { generateMetadata } from './with-discord-demolidores-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordDemolidoresServerKeywordPage />;
}
