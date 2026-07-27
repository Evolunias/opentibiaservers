import WithDiscordThaisotOtsKeywordPage, { generateMetadata } from './with-discord-thaisot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordThaisotOtsKeywordPage />;
}
