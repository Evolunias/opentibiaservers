import WithDiscordNepreniaClientKeywordPage, { generateMetadata } from './with-discord-neprenia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNepreniaClientKeywordPage />;
}
