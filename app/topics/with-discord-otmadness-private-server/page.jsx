import WithDiscordOtmadnessPrivateServerKeywordPage, { generateMetadata } from './with-discord-otmadness-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordOtmadnessPrivateServerKeywordPage />;
}
