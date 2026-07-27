import WithDiscordArcaniarlWebsiteKeywordPage, { generateMetadata } from './with-discord-arcaniarl-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordArcaniarlWebsiteKeywordPage />;
}
