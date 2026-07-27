import NewSeasonTibiamePrivateServerKeywordPage, { generateMetadata } from './new-season-tibiame-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiamePrivateServerKeywordPage />;
}
