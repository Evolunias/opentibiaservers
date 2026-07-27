import WithDiscordTibiascapeServerKeywordPage, { generateMetadata } from './with-discord-tibiascape-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiascapeServerKeywordPage />;
}
