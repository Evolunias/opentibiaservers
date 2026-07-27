import Originaltibia11WithActivePlayersServerKeywordPage, { generateMetadata } from './originaltibia-11-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Originaltibia11WithActivePlayersServerKeywordPage />;
}
