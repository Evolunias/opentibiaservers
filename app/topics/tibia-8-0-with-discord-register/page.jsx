import Tibia80WithDiscordRegisterKeywordPage, { generateMetadata } from './tibia-8-0-with-discord-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithDiscordRegisterKeywordPage />;
}
