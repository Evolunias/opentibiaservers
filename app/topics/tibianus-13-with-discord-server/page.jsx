import Tibianus13WithDiscordServerKeywordPage, { generateMetadata } from './tibianus-13-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus13WithDiscordServerKeywordPage />;
}
