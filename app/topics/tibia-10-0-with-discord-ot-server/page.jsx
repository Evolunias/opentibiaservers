import Tibia100WithDiscordOtServerKeywordPage, { generateMetadata } from './tibia-10-0-with-discord-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100WithDiscordOtServerKeywordPage />;
}
