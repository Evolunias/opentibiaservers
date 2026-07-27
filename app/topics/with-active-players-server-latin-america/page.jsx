import WithActivePlayersServerLatinAmericaKeywordPage, { generateMetadata } from './with-active-players-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersServerLatinAmericaKeywordPage />;
}
