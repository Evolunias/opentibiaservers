import WithDiscordZuneraOtServerKeywordPage, { generateMetadata } from './with-discord-zunera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordZuneraOtServerKeywordPage />;
}
