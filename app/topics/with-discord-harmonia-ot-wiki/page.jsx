import WithDiscordHarmoniaOtWikiKeywordPage, { generateMetadata } from './with-discord-harmonia-ot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordHarmoniaOtWikiKeywordPage />;
}
