import WithDiscordNostaltherServerKeywordPage, { generateMetadata } from './with-discord-nostalther-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNostaltherServerKeywordPage />;
}
