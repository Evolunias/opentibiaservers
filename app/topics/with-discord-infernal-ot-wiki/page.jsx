import WithDiscordInfernalOtWikiKeywordPage, { generateMetadata } from './with-discord-infernal-ot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordInfernalOtWikiKeywordPage />;
}
