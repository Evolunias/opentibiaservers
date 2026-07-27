import WithDiscordOtmadnessWikiKeywordPage, { generateMetadata } from './with-discord-otmadness-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordOtmadnessWikiKeywordPage />;
}
