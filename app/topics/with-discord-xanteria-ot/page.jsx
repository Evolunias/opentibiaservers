import WithDiscordXanteriaOtKeywordPage, { generateMetadata } from './with-discord-xanteria-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordXanteriaOtKeywordPage />;
}
