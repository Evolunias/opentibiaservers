import Thaisot71WithDiscordServerKeywordPage, { generateMetadata } from './thaisot-7-1-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot71WithDiscordServerKeywordPage />;
}
