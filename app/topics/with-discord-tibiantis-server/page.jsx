import WithDiscordTibiantisServerKeywordPage, { generateMetadata } from './with-discord-tibiantis-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiantisServerKeywordPage />;
}
