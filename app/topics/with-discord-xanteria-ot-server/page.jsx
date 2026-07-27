import WithDiscordXanteriaOtServerKeywordPage, { generateMetadata } from './with-discord-xanteria-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordXanteriaOtServerKeywordPage />;
}
