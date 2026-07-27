import NewSeasonAmeriaGuideKeywordPage, { generateMetadata } from './new-season-ameria-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonAmeriaGuideKeywordPage />;
}
