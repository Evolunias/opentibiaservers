import Alastera84WithActivePlayersServerKeywordPage, { generateMetadata } from './alastera-8-4-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera84WithActivePlayersServerKeywordPage />;
}
