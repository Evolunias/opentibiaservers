import NewSeasonNepreniaClientKeywordPage, { generateMetadata } from './new-season-neprenia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNepreniaClientKeywordPage />;
}
