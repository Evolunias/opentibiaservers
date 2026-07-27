import WithActivePlayersClientSwedenKeywordPage, { generateMetadata } from './with-active-players-client-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersClientSwedenKeywordPage />;
}
