import CurrentVenoreotOtKeywordPage, { generateMetadata } from './current-venoreot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentVenoreotOtKeywordPage />;
}
