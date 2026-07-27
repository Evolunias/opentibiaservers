import WithDiscordAureraGlobalTibiaKeywordPage, { generateMetadata } from './with-discord-aurera-global-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordAureraGlobalTibiaKeywordPage />;
}
