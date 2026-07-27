import Trashformers13WithDiscordServerKeywordPage, { generateMetadata } from './trashformers-13-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Trashformers13WithDiscordServerKeywordPage />;
}
