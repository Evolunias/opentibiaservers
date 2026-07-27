import WithDiscordEvoleraServerKeywordPage, { generateMetadata } from './with-discord-evolera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordEvoleraServerKeywordPage />;
}
