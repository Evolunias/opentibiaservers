import Luminera13WithDiscordServerKeywordPage, { generateMetadata } from './luminera-13-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera13WithDiscordServerKeywordPage />;
}
