import Venoreot14WithActivePlayersServerKeywordPage, { generateMetadata } from './venoreot-14-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot14WithActivePlayersServerKeywordPage />;
}
