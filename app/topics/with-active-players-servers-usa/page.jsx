import WithActivePlayersServersUsaKeywordPage, { generateMetadata } from './with-active-players-servers-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersServersUsaKeywordPage />;
}
