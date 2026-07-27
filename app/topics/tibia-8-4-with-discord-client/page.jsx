import Tibia84WithDiscordClientKeywordPage, { generateMetadata } from './tibia-8-4-with-discord-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84WithDiscordClientKeywordPage />;
}
