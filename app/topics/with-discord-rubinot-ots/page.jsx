import WithDiscordRubinotOtsKeywordPage, { generateMetadata } from './with-discord-rubinot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRubinotOtsKeywordPage />;
}
