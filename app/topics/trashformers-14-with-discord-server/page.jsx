import Trashformers14WithDiscordServerKeywordPage, { generateMetadata } from './trashformers-14-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Trashformers14WithDiscordServerKeywordPage />;
}
