import Tibia772WithDiscordClientKeywordPage, { generateMetadata } from './tibia-7-72-with-discord-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772WithDiscordClientKeywordPage />;
}
