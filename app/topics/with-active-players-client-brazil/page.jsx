import WithActivePlayersClientBrazilKeywordPage, { generateMetadata } from './with-active-players-client-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersClientBrazilKeywordPage />;
}
