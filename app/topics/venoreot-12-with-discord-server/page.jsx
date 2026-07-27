import Venoreot12WithDiscordServerKeywordPage, { generateMetadata } from './venoreot-12-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot12WithDiscordServerKeywordPage />;
}
