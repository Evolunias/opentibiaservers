import WithActivePlayersClientUsaKeywordPage, { generateMetadata } from './with-active-players-client-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersClientUsaKeywordPage />;
}
