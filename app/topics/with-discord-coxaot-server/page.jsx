import WithDiscordCoxaotServerKeywordPage, { generateMetadata } from './with-discord-coxaot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCoxaotServerKeywordPage />;
}
