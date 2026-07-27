import Tibia86ServerDiscordKeywordPage, { generateMetadata } from './tibia-8-6-server-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86ServerDiscordKeywordPage />;
}
