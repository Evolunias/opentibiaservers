import NewSeasonTibiascapePrivateServerKeywordPage, { generateMetadata } from './new-season-tibiascape-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiascapePrivateServerKeywordPage />;
}
