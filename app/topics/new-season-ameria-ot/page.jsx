import NewSeasonAmeriaOtKeywordPage, { generateMetadata } from './new-season-ameria-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonAmeriaOtKeywordPage />;
}
