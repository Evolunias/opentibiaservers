import NewSeasonThaisotClientKeywordPage, { generateMetadata } from './new-season-thaisot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonThaisotClientKeywordPage />;
}
