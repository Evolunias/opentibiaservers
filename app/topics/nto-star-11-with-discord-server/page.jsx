import NtoStar11WithDiscordServerKeywordPage, { generateMetadata } from './nto-star-11-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar11WithDiscordServerKeywordPage />;
}
