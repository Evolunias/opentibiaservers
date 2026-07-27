import NewSeasonOlderaKeywordPage, { generateMetadata } from './new-season-oldera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOlderaKeywordPage />;
}
