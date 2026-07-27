import WithDiscordTibiaoriginsWikiKeywordPage, { generateMetadata } from './with-discord-tibiaorigins-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiaoriginsWikiKeywordPage />;
}
