import WithDiscordAureraGlobalKeywordPage, { generateMetadata } from './with-discord-aurera-global';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordAureraGlobalKeywordPage />;
}
