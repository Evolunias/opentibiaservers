import WithDiscordCoxaotDiscordKeywordPage, { generateMetadata } from './with-discord-coxaot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCoxaotDiscordKeywordPage />;
}
