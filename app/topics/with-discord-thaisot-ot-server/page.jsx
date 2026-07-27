import WithDiscordThaisotOtServerKeywordPage, { generateMetadata } from './with-discord-thaisot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordThaisotOtServerKeywordPage />;
}
