import WithDiscordMarolaotServerKeywordPage, { generateMetadata } from './with-discord-marolaot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMarolaotServerKeywordPage />;
}
