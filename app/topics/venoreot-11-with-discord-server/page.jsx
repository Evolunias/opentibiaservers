import Venoreot11WithDiscordServerKeywordPage, { generateMetadata } from './venoreot-11-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot11WithDiscordServerKeywordPage />;
}
