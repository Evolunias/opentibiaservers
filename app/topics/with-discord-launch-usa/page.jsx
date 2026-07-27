import WithDiscordLaunchUsaKeywordPage, { generateMetadata } from './with-discord-launch-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordLaunchUsaKeywordPage />;
}
