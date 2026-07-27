import BestMiracleDiscordKeywordPage, { generateMetadata } from './best-miracle-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMiracleDiscordKeywordPage />;
}
