import NewSeasonKasteriaOtKeywordPage, { generateMetadata } from './new-season-kasteria-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonKasteriaOtKeywordPage />;
}
