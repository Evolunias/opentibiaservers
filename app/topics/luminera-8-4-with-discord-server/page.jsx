import Luminera84WithDiscordServerKeywordPage, { generateMetadata } from './luminera-8-4-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera84WithDiscordServerKeywordPage />;
}
