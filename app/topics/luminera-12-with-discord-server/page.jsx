import Luminera12WithDiscordServerKeywordPage, { generateMetadata } from './luminera-12-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera12WithDiscordServerKeywordPage />;
}
