import VenoreotOtsKeywordPage, { generateMetadata } from './venoreot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotOtsKeywordPage />;
}
