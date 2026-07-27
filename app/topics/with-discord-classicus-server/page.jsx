import WithDiscordClassicusServerKeywordPage, { generateMetadata } from './with-discord-classicus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordClassicusServerKeywordPage />;
}
