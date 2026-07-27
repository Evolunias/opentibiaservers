import NewSeasonOlderaGuideKeywordPage, { generateMetadata } from './new-season-oldera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOlderaGuideKeywordPage />;
}
