import Tibia11WithDiscordClientKeywordPage, { generateMetadata } from './tibia-11-with-discord-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithDiscordClientKeywordPage />;
}
