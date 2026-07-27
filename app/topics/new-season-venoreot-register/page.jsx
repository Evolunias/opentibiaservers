import NewSeasonVenoreotRegisterKeywordPage, { generateMetadata } from './new-season-venoreot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonVenoreotRegisterKeywordPage />;
}
