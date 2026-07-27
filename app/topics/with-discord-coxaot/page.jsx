import WithDiscordCoxaotKeywordPage, { generateMetadata } from './with-discord-coxaot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCoxaotKeywordPage />;
}
