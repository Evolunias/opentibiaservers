import WithDiscordKasteriaKeywordPage, { generateMetadata } from './with-discord-kasteria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordKasteriaKeywordPage />;
}
