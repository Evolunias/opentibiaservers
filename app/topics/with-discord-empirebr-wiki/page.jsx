import WithDiscordEmpirebrWikiKeywordPage, { generateMetadata } from './with-discord-empirebr-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordEmpirebrWikiKeywordPage />;
}
