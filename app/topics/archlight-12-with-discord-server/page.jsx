import Archlight12WithDiscordServerKeywordPage, { generateMetadata } from './archlight-12-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight12WithDiscordServerKeywordPage />;
}
