import PopularMiracleDiscordKeywordPage, { generateMetadata } from './popular-miracle-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMiracleDiscordKeywordPage />;
}
