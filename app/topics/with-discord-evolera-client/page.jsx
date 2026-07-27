import WithDiscordEvoleraClientKeywordPage, { generateMetadata } from './with-discord-evolera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordEvoleraClientKeywordPage />;
}
