import WithDiscordZuneraOtClientKeywordPage, { generateMetadata } from './with-discord-zunera-ot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordZuneraOtClientKeywordPage />;
}
