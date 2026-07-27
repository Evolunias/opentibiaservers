import Unline12WithDiscordServerKeywordPage, { generateMetadata } from './unline-12-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline12WithDiscordServerKeywordPage />;
}
