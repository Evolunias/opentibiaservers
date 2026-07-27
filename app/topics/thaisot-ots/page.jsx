import ThaisotOtsKeywordPage, { generateMetadata } from './thaisot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotOtsKeywordPage />;
}
