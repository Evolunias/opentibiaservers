import WithDiscordRubinotRegisterKeywordPage, { generateMetadata } from './with-discord-rubinot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRubinotRegisterKeywordPage />;
}
