import Tibia13WithDiscordRegisterKeywordPage, { generateMetadata } from './tibia-13-with-discord-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13WithDiscordRegisterKeywordPage />;
}
