import WithDiscordNostaltherKeywordPage, { generateMetadata } from './with-discord-nostalther';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNostaltherKeywordPage />;
}
