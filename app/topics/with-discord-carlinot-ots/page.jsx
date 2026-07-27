import WithDiscordCarlinotOtsKeywordPage, { generateMetadata } from './with-discord-carlinot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCarlinotOtsKeywordPage />;
}
