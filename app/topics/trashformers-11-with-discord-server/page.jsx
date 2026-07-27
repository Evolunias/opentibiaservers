import Trashformers11WithDiscordServerKeywordPage, { generateMetadata } from './trashformers-11-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Trashformers11WithDiscordServerKeywordPage />;
}
