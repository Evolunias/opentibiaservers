import Venoreot13WithDiscordServerKeywordPage, { generateMetadata } from './venoreot-13-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot13WithDiscordServerKeywordPage />;
}
