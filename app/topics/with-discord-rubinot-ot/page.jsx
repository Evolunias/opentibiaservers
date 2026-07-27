import WithDiscordRubinotOtKeywordPage, { generateMetadata } from './with-discord-rubinot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRubinotOtKeywordPage />;
}
