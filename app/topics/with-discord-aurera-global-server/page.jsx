import WithDiscordAureraGlobalServerKeywordPage, { generateMetadata } from './with-discord-aurera-global-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordAureraGlobalServerKeywordPage />;
}
