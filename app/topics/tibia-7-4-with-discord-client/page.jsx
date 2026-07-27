import Tibia74WithDiscordClientKeywordPage, { generateMetadata } from './tibia-7-4-with-discord-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74WithDiscordClientKeywordPage />;
}
