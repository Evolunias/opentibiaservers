import NewSeasonAmeriaLoginKeywordPage, { generateMetadata } from './new-season-ameria-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonAmeriaLoginKeywordPage />;
}
