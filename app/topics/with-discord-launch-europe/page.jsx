import WithDiscordLaunchEuropeKeywordPage, { generateMetadata } from './with-discord-launch-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordLaunchEuropeKeywordPage />;
}
