import WithActivePlayersAmeriaServerKeywordPage, { generateMetadata } from './with-active-players-ameria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersAmeriaServerKeywordPage />;
}
