import Tibia13ServerDiscordKeywordPage, { generateMetadata } from './tibia-13-server-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13ServerDiscordKeywordPage />;
}
