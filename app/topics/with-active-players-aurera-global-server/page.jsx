import WithActivePlayersAureraGlobalServerKeywordPage, { generateMetadata } from './with-active-players-aurera-global-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersAureraGlobalServerKeywordPage />;
}
