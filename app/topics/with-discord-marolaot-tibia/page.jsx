import WithDiscordMarolaotTibiaKeywordPage, { generateMetadata } from './with-discord-marolaot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMarolaotTibiaKeywordPage />;
}
