import WithDiscordOtServerUkKeywordPage, { generateMetadata } from './with-discord-ot-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordOtServerUkKeywordPage />;
}
