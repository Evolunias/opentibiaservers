import NewSeasonNepreniaOtKeywordPage, { generateMetadata } from './new-season-neprenia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNepreniaOtKeywordPage />;
}
