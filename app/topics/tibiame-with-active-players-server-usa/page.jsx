import TibiameWithActivePlayersServerUsaKeywordPage, { generateMetadata } from './tibiame-with-active-players-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameWithActivePlayersServerUsaKeywordPage />;
}
