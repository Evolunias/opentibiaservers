import NewMiracleDiscordKeywordPage, { generateMetadata } from './new-miracle-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMiracleDiscordKeywordPage />;
}
