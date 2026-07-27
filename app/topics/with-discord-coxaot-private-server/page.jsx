import WithDiscordCoxaotPrivateServerKeywordPage, { generateMetadata } from './with-discord-coxaot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCoxaotPrivateServerKeywordPage />;
}
