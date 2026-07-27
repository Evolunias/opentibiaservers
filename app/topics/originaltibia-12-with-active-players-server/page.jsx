import Originaltibia12WithActivePlayersServerKeywordPage, { generateMetadata } from './originaltibia-12-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Originaltibia12WithActivePlayersServerKeywordPage />;
}
