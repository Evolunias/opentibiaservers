import NewSeasonSaintsotGuideKeywordPage, { generateMetadata } from './new-season-saintsot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSaintsotGuideKeywordPage />;
}
