import NewSeasonElderaGuideKeywordPage, { generateMetadata } from './new-season-eldera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonElderaGuideKeywordPage />;
}
