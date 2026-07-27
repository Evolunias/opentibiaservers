import NewSeasonVenoreotLoginKeywordPage, { generateMetadata } from './new-season-venoreot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonVenoreotLoginKeywordPage />;
}
