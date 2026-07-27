import NewSeasonAmeriaOtServerKeywordPage, { generateMetadata } from './new-season-ameria-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonAmeriaOtServerKeywordPage />;
}
