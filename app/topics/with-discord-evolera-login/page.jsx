import WithDiscordEvoleraLoginKeywordPage, { generateMetadata } from './with-discord-evolera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordEvoleraLoginKeywordPage />;
}
