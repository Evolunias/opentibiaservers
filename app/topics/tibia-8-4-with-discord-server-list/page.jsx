import Tibia84WithDiscordServerListKeywordPage, { generateMetadata } from './tibia-8-4-with-discord-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84WithDiscordServerListKeywordPage />;
}
