import WithDiscordTibiascapeClientKeywordPage, { generateMetadata } from './with-discord-tibiascape-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiascapeClientKeywordPage />;
}
