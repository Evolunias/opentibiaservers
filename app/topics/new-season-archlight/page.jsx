import NewSeasonArchlightKeywordPage, { generateMetadata } from './new-season-archlight';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonArchlightKeywordPage />;
}
