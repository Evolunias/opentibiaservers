import Tibia74WithDiscordServerKeywordPage, { generateMetadata } from './tibia-7-4-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74WithDiscordServerKeywordPage />;
}
