import WithActivePlayersLumineraServerKeywordPage, { generateMetadata } from './with-active-players-luminera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersLumineraServerKeywordPage />;
}
