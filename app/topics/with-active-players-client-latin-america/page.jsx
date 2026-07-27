import WithActivePlayersClientLatinAmericaKeywordPage, { generateMetadata } from './with-active-players-client-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersClientLatinAmericaKeywordPage />;
}
