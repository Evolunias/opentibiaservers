import Tibia11WithDiscordRegisterKeywordPage, { generateMetadata } from './tibia-11-with-discord-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithDiscordRegisterKeywordPage />;
}
