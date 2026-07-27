import BestThaisotOtKeywordPage, { generateMetadata } from './best-thaisot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestThaisotOtKeywordPage />;
}
