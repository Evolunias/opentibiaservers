import NewSeasonTibiantisGuideKeywordPage, { generateMetadata } from './new-season-tibiantis-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiantisGuideKeywordPage />;
}
