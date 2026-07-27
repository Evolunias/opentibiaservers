import PopularVenoreotOtKeywordPage, { generateMetadata } from './popular-venoreot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularVenoreotOtKeywordPage />;
}
