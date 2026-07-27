import WithDiscordThorniaDiscordKeywordPage, { generateMetadata } from './with-discord-thornia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordThorniaDiscordKeywordPage />;
}
