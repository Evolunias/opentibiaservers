import WithDiscordNostaltherOpenTibiaKeywordPage, { generateMetadata } from './with-discord-nostalther-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNostaltherOpenTibiaKeywordPage />;
}
