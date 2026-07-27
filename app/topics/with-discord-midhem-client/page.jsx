import WithDiscordMidhemClientKeywordPage, { generateMetadata } from './with-discord-midhem-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMidhemClientKeywordPage />;
}
