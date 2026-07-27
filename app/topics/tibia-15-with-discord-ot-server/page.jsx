import Tibia15WithDiscordOtServerKeywordPage, { generateMetadata } from './tibia-15-with-discord-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15WithDiscordOtServerKeywordPage />;
}
