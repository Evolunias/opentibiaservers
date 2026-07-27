import WithDiscordTibiascapeOtKeywordPage, { generateMetadata } from './with-discord-tibiascape-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiascapeOtKeywordPage />;
}
