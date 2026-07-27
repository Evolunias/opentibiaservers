import WithDiscordMistOfDeathServerKeywordPage, { generateMetadata } from './with-discord-mist-of-death-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMistOfDeathServerKeywordPage />;
}
