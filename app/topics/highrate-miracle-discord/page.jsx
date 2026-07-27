import HighrateMiracleDiscordKeywordPage, { generateMetadata } from './highrate-miracle-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMiracleDiscordKeywordPage />;
}
