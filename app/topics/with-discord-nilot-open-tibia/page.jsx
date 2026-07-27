import WithDiscordNilotOpenTibiaKeywordPage, { generateMetadata } from './with-discord-nilot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNilotOpenTibiaKeywordPage />;
}
