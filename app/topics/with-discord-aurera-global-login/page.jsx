import WithDiscordAureraGlobalLoginKeywordPage, { generateMetadata } from './with-discord-aurera-global-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordAureraGlobalLoginKeywordPage />;
}
