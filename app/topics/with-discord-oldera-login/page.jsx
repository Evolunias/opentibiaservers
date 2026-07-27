import WithDiscordOlderaLoginKeywordPage, { generateMetadata } from './with-discord-oldera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordOlderaLoginKeywordPage />;
}
