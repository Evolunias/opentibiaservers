import NewSeasonOlderaClientKeywordPage, { generateMetadata } from './new-season-oldera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOlderaClientKeywordPage />;
}
