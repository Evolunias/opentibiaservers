import WithDiscordCanobOfficialKeywordPage, { generateMetadata } from './with-discord-canob-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCanobOfficialKeywordPage />;
}
