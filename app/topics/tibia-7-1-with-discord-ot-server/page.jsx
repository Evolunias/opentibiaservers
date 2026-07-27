import Tibia71WithDiscordOtServerKeywordPage, { generateMetadata } from './tibia-7-1-with-discord-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71WithDiscordOtServerKeywordPage />;
}
