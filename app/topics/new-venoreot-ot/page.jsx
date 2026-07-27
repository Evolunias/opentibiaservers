import NewVenoreotOtKeywordPage, { generateMetadata } from './new-venoreot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewVenoreotOtKeywordPage />;
}
