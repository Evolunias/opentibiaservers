import Luminera100WithDiscordServerKeywordPage, { generateMetadata } from './luminera-10-0-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera100WithDiscordServerKeywordPage />;
}
