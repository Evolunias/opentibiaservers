import Archlight11WithDiscordServerKeywordPage, { generateMetadata } from './archlight-11-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight11WithDiscordServerKeywordPage />;
}
