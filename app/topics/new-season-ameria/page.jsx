import NewSeasonAmeriaKeywordPage, { generateMetadata } from './new-season-ameria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonAmeriaKeywordPage />;
}
