import Tibia86WithDiscordClientKeywordPage, { generateMetadata } from './tibia-8-6-with-discord-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86WithDiscordClientKeywordPage />;
}
