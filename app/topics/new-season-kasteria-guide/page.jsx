import NewSeasonKasteriaGuideKeywordPage, { generateMetadata } from './new-season-kasteria-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonKasteriaGuideKeywordPage />;
}
