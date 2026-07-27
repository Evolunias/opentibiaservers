import ActiveVenoreotOfficialKeywordPage, { generateMetadata } from './active-venoreot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveVenoreotOfficialKeywordPage />;
}
