import WithDiscordTibiantisClientKeywordPage, { generateMetadata } from './with-discord-tibiantis-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiantisClientKeywordPage />;
}
