import WithDiscordSabrehavenOtServerKeywordPage, { generateMetadata } from './with-discord-sabrehaven-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSabrehavenOtServerKeywordPage />;
}
