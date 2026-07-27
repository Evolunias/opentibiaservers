import WithDiscordZuneraOtLoginKeywordPage, { generateMetadata } from './with-discord-zunera-ot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordZuneraOtLoginKeywordPage />;
}
