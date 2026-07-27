import WithDiscordTibijkaDiscordKeywordPage, { generateMetadata } from './with-discord-tibijka-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibijkaDiscordKeywordPage />;
}
