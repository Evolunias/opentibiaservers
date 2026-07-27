import WithDiscordZuneraOtKeywordPage, { generateMetadata } from './with-discord-zunera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordZuneraOtKeywordPage />;
}
