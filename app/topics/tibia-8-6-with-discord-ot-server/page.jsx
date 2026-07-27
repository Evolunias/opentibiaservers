import Tibia86WithDiscordOtServerKeywordPage, { generateMetadata } from './tibia-8-6-with-discord-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86WithDiscordOtServerKeywordPage />;
}
