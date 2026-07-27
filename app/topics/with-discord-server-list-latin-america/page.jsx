import WithDiscordServerListLatinAmericaKeywordPage, { generateMetadata } from './with-discord-server-list-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordServerListLatinAmericaKeywordPage />;
}
