import Tibia100WithDiscordClientKeywordPage, { generateMetadata } from './tibia-10-0-with-discord-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100WithDiscordClientKeywordPage />;
}
