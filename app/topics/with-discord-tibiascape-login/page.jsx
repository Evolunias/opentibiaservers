import WithDiscordTibiascapeLoginKeywordPage, { generateMetadata } from './with-discord-tibiascape-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiascapeLoginKeywordPage />;
}
