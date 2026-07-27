import Thaisot11WithDiscordServerKeywordPage, { generateMetadata } from './thaisot-11-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot11WithDiscordServerKeywordPage />;
}
