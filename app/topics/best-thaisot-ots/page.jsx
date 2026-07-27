import BestThaisotOtsKeywordPage, { generateMetadata } from './best-thaisot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestThaisotOtsKeywordPage />;
}
