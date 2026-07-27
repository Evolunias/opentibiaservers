import Tibia76WithDiscordClientKeywordPage, { generateMetadata } from './tibia-7-6-with-discord-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76WithDiscordClientKeywordPage />;
}
