import NtoStar15WithDiscordServerKeywordPage, { generateMetadata } from './nto-star-15-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar15WithDiscordServerKeywordPage />;
}
