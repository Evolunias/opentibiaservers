import WithDiscordMidhemOtServerKeywordPage, { generateMetadata } from './with-discord-midhem-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMidhemOtServerKeywordPage />;
}
