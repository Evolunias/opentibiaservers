import WithDiscordMiracleOtKeywordPage, { generateMetadata } from './with-discord-miracle-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMiracleOtKeywordPage />;
}
