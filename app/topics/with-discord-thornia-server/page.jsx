import WithDiscordThorniaServerKeywordPage, { generateMetadata } from './with-discord-thornia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordThorniaServerKeywordPage />;
}
