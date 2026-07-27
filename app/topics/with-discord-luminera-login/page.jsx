import WithDiscordLumineraLoginKeywordPage, { generateMetadata } from './with-discord-luminera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordLumineraLoginKeywordPage />;
}
