import Luminera96WithDiscordServerKeywordPage, { generateMetadata } from './luminera-9-6-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera96WithDiscordServerKeywordPage />;
}
