import TibiaPrivateServerDiscordKeywordPage, { generateMetadata } from './tibia-private-server-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaPrivateServerDiscordKeywordPage />;
}
