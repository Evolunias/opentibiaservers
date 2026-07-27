import NewSeasonVenoreotGuideKeywordPage, { generateMetadata } from './new-season-venoreot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonVenoreotGuideKeywordPage />;
}
