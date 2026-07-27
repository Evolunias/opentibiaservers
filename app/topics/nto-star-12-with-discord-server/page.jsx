import NtoStar12WithDiscordServerKeywordPage, { generateMetadata } from './nto-star-12-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar12WithDiscordServerKeywordPage />;
}
