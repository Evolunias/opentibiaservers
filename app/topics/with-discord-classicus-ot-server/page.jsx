import WithDiscordClassicusOtServerKeywordPage, { generateMetadata } from './with-discord-classicus-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordClassicusOtServerKeywordPage />;
}
