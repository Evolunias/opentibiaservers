import Luminera76WithDiscordServerKeywordPage, { generateMetadata } from './luminera-7-6-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera76WithDiscordServerKeywordPage />;
}
