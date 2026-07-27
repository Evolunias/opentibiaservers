import Thaisot71WithActivePlayersServerKeywordPage, { generateMetadata } from './thaisot-7-1-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot71WithActivePlayersServerKeywordPage />;
}
