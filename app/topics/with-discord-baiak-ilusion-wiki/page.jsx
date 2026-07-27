import WithDiscordBaiakIlusionWikiKeywordPage, { generateMetadata } from './with-discord-baiak-ilusion-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordBaiakIlusionWikiKeywordPage />;
}
