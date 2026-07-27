import FreshStartThaisotOtsKeywordPage, { generateMetadata } from './fresh-start-thaisot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartThaisotOtsKeywordPage />;
}
