import NewSeasonAmeriaClientKeywordPage, { generateMetadata } from './new-season-ameria-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonAmeriaClientKeywordPage />;
}
