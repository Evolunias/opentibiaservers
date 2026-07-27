import WithDiscordThorniaOtsKeywordPage, { generateMetadata } from './with-discord-thornia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordThorniaOtsKeywordPage />;
}
