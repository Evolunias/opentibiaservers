import WithDiscordNilotTibiaKeywordPage, { generateMetadata } from './with-discord-nilot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNilotTibiaKeywordPage />;
}
