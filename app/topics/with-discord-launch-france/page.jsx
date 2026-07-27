import WithDiscordLaunchFranceKeywordPage, { generateMetadata } from './with-discord-launch-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordLaunchFranceKeywordPage />;
}
