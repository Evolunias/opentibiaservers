import WithDiscordLaunchBrazilKeywordPage, { generateMetadata } from './with-discord-launch-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordLaunchBrazilKeywordPage />;
}
