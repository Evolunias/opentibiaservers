import Tibia100WithDiscordServerListKeywordPage, { generateMetadata } from './tibia-10-0-with-discord-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100WithDiscordServerListKeywordPage />;
}
