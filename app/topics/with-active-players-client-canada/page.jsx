import WithActivePlayersClientCanadaKeywordPage, { generateMetadata } from './with-active-players-client-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersClientCanadaKeywordPage />;
}
