import WithDiscordCanobOpenTibiaKeywordPage, { generateMetadata } from './with-discord-canob-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCanobOpenTibiaKeywordPage />;
}
