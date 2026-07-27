import WithActivePlayersClientMexicoKeywordPage, { generateMetadata } from './with-active-players-client-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersClientMexicoKeywordPage />;
}
