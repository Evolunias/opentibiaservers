import Luminera81WithDiscordServerKeywordPage, { generateMetadata } from './luminera-8-1-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera81WithDiscordServerKeywordPage />;
}
