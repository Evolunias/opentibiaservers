import WithDiscordKasteriaOtServerKeywordPage, { generateMetadata } from './with-discord-kasteria-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordKasteriaOtServerKeywordPage />;
}
