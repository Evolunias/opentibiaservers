import Blazera12WithDiscordServerKeywordPage, { generateMetadata } from './blazera-12-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera12WithDiscordServerKeywordPage />;
}
