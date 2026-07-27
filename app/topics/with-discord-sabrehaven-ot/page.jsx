import WithDiscordSabrehavenOtKeywordPage, { generateMetadata } from './with-discord-sabrehaven-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSabrehavenOtKeywordPage />;
}
