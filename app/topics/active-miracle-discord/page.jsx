import ActiveMiracleDiscordKeywordPage, { generateMetadata } from './active-miracle-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMiracleDiscordKeywordPage />;
}
