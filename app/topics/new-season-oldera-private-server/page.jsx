import NewSeasonOlderaPrivateServerKeywordPage, { generateMetadata } from './new-season-oldera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOlderaPrivateServerKeywordPage />;
}
