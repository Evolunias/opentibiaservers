import Tibia76WithDiscordOtServerKeywordPage, { generateMetadata } from './tibia-7-6-with-discord-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76WithDiscordOtServerKeywordPage />;
}
