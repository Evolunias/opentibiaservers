import WithDiscordNostaltherClientKeywordPage, { generateMetadata } from './with-discord-nostalther-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNostaltherClientKeywordPage />;
}
