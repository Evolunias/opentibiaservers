import Luminera74WithDiscordServerKeywordPage, { generateMetadata } from './luminera-7-4-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera74WithDiscordServerKeywordPage />;
}
