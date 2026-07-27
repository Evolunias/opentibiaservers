import WithDiscordOlderaTibiaKeywordPage, { generateMetadata } from './with-discord-oldera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordOlderaTibiaKeywordPage />;
}
