import WithDiscordUnlineLoginKeywordPage, { generateMetadata } from './with-discord-unline-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordUnlineLoginKeywordPage />;
}
