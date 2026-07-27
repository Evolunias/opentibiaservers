import Archlight15WithDiscordServerKeywordPage, { generateMetadata } from './archlight-15-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight15WithDiscordServerKeywordPage />;
}
