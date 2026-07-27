import Thaisot12WithActivePlayersServerKeywordPage, { generateMetadata } from './thaisot-12-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot12WithActivePlayersServerKeywordPage />;
}
