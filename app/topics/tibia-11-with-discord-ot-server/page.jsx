import Tibia11WithDiscordOtServerKeywordPage, { generateMetadata } from './tibia-11-with-discord-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithDiscordOtServerKeywordPage />;
}
