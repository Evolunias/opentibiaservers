import OfficialVenoreotOtKeywordPage, { generateMetadata } from './official-venoreot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialVenoreotOtKeywordPage />;
}
