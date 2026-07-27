import NtoStar13WithDiscordServerKeywordPage, { generateMetadata } from './nto-star-13-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar13WithDiscordServerKeywordPage />;
}
