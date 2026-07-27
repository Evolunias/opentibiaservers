import WithDiscordNepreniaOtServerKeywordPage, { generateMetadata } from './with-discord-neprenia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNepreniaOtServerKeywordPage />;
}
