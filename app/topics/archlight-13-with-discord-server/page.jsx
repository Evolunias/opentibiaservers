import Archlight13WithDiscordServerKeywordPage, { generateMetadata } from './archlight-13-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight13WithDiscordServerKeywordPage />;
}
