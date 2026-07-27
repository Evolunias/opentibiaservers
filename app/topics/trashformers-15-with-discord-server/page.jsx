import Trashformers15WithDiscordServerKeywordPage, { generateMetadata } from './trashformers-15-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Trashformers15WithDiscordServerKeywordPage />;
}
