import NewSeasonNepreniaOtsKeywordPage, { generateMetadata } from './new-season-neprenia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNepreniaOtsKeywordPage />;
}
