import CurrentVenoreotOtServerKeywordPage, { generateMetadata } from './current-venoreot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentVenoreotOtServerKeywordPage />;
}
