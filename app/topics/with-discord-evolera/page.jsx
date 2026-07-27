import WithDiscordEvoleraKeywordPage, { generateMetadata } from './with-discord-evolera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordEvoleraKeywordPage />;
}
