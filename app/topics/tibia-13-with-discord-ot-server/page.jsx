import Tibia13WithDiscordOtServerKeywordPage, { generateMetadata } from './tibia-13-with-discord-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13WithDiscordOtServerKeywordPage />;
}
