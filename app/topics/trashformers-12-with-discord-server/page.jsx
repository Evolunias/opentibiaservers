import Trashformers12WithDiscordServerKeywordPage, { generateMetadata } from './trashformers-12-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Trashformers12WithDiscordServerKeywordPage />;
}
