import VenoreotOtKeywordPage, { generateMetadata } from './venoreot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotOtKeywordPage />;
}
