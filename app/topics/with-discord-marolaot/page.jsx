import WithDiscordMarolaotKeywordPage, { generateMetadata } from './with-discord-marolaot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMarolaotKeywordPage />;
}
