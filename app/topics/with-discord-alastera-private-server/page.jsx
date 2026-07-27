import WithDiscordAlasteraPrivateServerKeywordPage, { generateMetadata } from './with-discord-alastera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordAlasteraPrivateServerKeywordPage />;
}
