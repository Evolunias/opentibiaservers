import WithDiscordNostaltherTibiaKeywordPage, { generateMetadata } from './with-discord-nostalther-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNostaltherTibiaKeywordPage />;
}
