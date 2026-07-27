import WithDiscordCyntaraLoginKeywordPage, { generateMetadata } from './with-discord-cyntara-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCyntaraLoginKeywordPage />;
}
