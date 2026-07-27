import NewSeasonOlderaServerKeywordPage, { generateMetadata } from './new-season-oldera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOlderaServerKeywordPage />;
}
