import WithDiscordCyntaraOtServerKeywordPage, { generateMetadata } from './with-discord-cyntara-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCyntaraOtServerKeywordPage />;
}
