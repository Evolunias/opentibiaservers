import WithDiscordNilotOtsKeywordPage, { generateMetadata } from './with-discord-nilot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNilotOtsKeywordPage />;
}
