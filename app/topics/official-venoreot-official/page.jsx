import OfficialVenoreotOfficialKeywordPage, { generateMetadata } from './official-venoreot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialVenoreotOfficialKeywordPage />;
}
