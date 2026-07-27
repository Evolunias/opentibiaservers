import LowrateMiracleDiscordKeywordPage, { generateMetadata } from './lowrate-miracle-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMiracleDiscordKeywordPage />;
}
