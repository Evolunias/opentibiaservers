import WithDiscordMidhemLoginKeywordPage, { generateMetadata } from './with-discord-midhem-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMidhemLoginKeywordPage />;
}
