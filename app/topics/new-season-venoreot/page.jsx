import NewSeasonVenoreotKeywordPage, { generateMetadata } from './new-season-venoreot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonVenoreotKeywordPage />;
}
