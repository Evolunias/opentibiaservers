import FreshStartThaisotOtKeywordPage, { generateMetadata } from './fresh-start-thaisot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartThaisotOtKeywordPage />;
}
