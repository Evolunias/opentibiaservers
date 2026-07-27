import WithDiscordTibiaraRegisterKeywordPage, { generateMetadata } from './with-discord-tibiara-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiaraRegisterKeywordPage />;
}
