import WithDiscordAureraGlobalClientKeywordPage, { generateMetadata } from './with-discord-aurera-global-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordAureraGlobalClientKeywordPage />;
}
