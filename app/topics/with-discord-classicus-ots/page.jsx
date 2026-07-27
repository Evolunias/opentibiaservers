import WithDiscordClassicusOtsKeywordPage, { generateMetadata } from './with-discord-classicus-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordClassicusOtsKeywordPage />;
}
