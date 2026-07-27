import WithDiscordCanobKeywordPage, { generateMetadata } from './with-discord-canob';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCanobKeywordPage />;
}
