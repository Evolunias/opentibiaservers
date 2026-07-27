import NewSeasonElderaKeywordPage, { generateMetadata } from './new-season-eldera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonElderaKeywordPage />;
}
