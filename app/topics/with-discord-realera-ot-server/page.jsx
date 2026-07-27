import WithDiscordRealeraOtServerKeywordPage, { generateMetadata } from './with-discord-realera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRealeraOtServerKeywordPage />;
}
