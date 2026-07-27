import WithActivePlayersServerNorthAmericaKeywordPage, { generateMetadata } from './with-active-players-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersServerNorthAmericaKeywordPage />;
}
