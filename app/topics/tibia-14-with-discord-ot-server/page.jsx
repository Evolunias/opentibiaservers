import Tibia14WithDiscordOtServerKeywordPage, { generateMetadata } from './tibia-14-with-discord-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14WithDiscordOtServerKeywordPage />;
}
