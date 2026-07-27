import WithDiscordRealeraLoginKeywordPage, { generateMetadata } from './with-discord-realera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRealeraLoginKeywordPage />;
}
