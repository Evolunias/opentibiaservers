import WithDiscordTibijkaOtServerKeywordPage, { generateMetadata } from './with-discord-tibijka-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibijkaOtServerKeywordPage />;
}
