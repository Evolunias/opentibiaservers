import WithDiscordNoxiousotWikiKeywordPage, { generateMetadata } from './with-discord-noxiousot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNoxiousotWikiKeywordPage />;
}
