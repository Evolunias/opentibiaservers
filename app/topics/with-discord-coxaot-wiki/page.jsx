import WithDiscordCoxaotWikiKeywordPage, { generateMetadata } from './with-discord-coxaot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCoxaotWikiKeywordPage />;
}
