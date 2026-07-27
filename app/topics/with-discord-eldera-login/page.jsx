import WithDiscordElderaLoginKeywordPage, { generateMetadata } from './with-discord-eldera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordElderaLoginKeywordPage />;
}
