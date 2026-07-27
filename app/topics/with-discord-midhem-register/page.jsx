import WithDiscordMidhemRegisterKeywordPage, { generateMetadata } from './with-discord-midhem-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMidhemRegisterKeywordPage />;
}
