import Venoreot14WithDiscordServerKeywordPage, { generateMetadata } from './venoreot-14-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot14WithDiscordServerKeywordPage />;
}
