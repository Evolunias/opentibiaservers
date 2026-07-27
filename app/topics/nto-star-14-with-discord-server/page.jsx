import NtoStar14WithDiscordServerKeywordPage, { generateMetadata } from './nto-star-14-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar14WithDiscordServerKeywordPage />;
}
