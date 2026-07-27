import Tibia11WithDiscordServerListKeywordPage, { generateMetadata } from './tibia-11-with-discord-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithDiscordServerListKeywordPage />;
}
