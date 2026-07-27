import WithActivePlayersServersCanadaKeywordPage, { generateMetadata } from './with-active-players-servers-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersServersCanadaKeywordPage />;
}
