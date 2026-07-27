import WithDiscordArchlightOtServerKeywordPage, { generateMetadata } from './with-discord-archlight-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordArchlightOtServerKeywordPage />;
}
