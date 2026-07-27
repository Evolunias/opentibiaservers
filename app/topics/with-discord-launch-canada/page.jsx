import WithDiscordLaunchCanadaKeywordPage, { generateMetadata } from './with-discord-launch-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordLaunchCanadaKeywordPage />;
}
