import Luminera11WithDiscordServerKeywordPage, { generateMetadata } from './luminera-11-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera11WithDiscordServerKeywordPage />;
}
