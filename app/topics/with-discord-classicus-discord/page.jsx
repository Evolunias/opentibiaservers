import WithDiscordClassicusDiscordKeywordPage, { generateMetadata } from './with-discord-classicus-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordClassicusDiscordKeywordPage />;
}
