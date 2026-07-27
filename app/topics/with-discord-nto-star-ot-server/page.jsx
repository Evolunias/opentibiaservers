import WithDiscordNtoStarOtServerKeywordPage, { generateMetadata } from './with-discord-nto-star-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNtoStarOtServerKeywordPage />;
}
