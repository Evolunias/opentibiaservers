import Luminera80WithDiscordServerKeywordPage, { generateMetadata } from './luminera-8-0-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera80WithDiscordServerKeywordPage />;
}
