import Tibia1098WithDiscordServerListKeywordPage, { generateMetadata } from './tibia-10-98-with-discord-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098WithDiscordServerListKeywordPage />;
}
