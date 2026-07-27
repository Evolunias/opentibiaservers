import WithDiscordXanteriaOtsKeywordPage, { generateMetadata } from './with-discord-xanteria-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordXanteriaOtsKeywordPage />;
}
