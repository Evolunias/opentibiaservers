import Venoreot12WithActivePlayersServerKeywordPage, { generateMetadata } from './venoreot-12-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot12WithActivePlayersServerKeywordPage />;
}
