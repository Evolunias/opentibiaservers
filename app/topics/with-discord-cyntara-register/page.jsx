import WithDiscordCyntaraRegisterKeywordPage, { generateMetadata } from './with-discord-cyntara-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCyntaraRegisterKeywordPage />;
}
