import WithDiscordTibiaraLoginKeywordPage, { generateMetadata } from './with-discord-tibiara-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiaraLoginKeywordPage />;
}
