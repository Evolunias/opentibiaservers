import WithDiscordUnlineOtServerKeywordPage, { generateMetadata } from './with-discord-unline-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordUnlineOtServerKeywordPage />;
}
