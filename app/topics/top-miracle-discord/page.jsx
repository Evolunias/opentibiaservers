import TopMiracleDiscordKeywordPage, { generateMetadata } from './top-miracle-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMiracleDiscordKeywordPage />;
}
