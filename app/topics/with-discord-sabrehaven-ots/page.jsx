import WithDiscordSabrehavenOtsKeywordPage, { generateMetadata } from './with-discord-sabrehaven-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSabrehavenOtsKeywordPage />;
}
