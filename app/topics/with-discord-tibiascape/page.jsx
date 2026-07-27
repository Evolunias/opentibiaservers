import WithDiscordTibiascapeKeywordPage, { generateMetadata } from './with-discord-tibiascape';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiascapeKeywordPage />;
}
