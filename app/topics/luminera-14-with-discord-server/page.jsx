import Luminera14WithDiscordServerKeywordPage, { generateMetadata } from './luminera-14-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera14WithDiscordServerKeywordPage />;
}
