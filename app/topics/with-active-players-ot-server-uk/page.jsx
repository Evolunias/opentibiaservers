import WithActivePlayersOtServerUkKeywordPage, { generateMetadata } from './with-active-players-ot-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersOtServerUkKeywordPage />;
}
