import Unline15WithDiscordServerKeywordPage, { generateMetadata } from './unline-15-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline15WithDiscordServerKeywordPage />;
}
