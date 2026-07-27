import NewSeasonThaisotServerKeywordPage, { generateMetadata } from './new-season-thaisot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonThaisotServerKeywordPage />;
}
