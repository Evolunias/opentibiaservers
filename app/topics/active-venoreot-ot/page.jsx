import ActiveVenoreotOtKeywordPage, { generateMetadata } from './active-venoreot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveVenoreotOtKeywordPage />;
}
