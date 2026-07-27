import WithDiscordAlasteraServerKeywordPage, { generateMetadata } from './with-discord-alastera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordAlasteraServerKeywordPage />;
}
