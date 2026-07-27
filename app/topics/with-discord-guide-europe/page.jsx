import WithDiscordGuideEuropeKeywordPage, { generateMetadata } from './with-discord-guide-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordGuideEuropeKeywordPage />;
}
