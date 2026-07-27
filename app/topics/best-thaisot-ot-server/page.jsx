import BestThaisotOtServerKeywordPage, { generateMetadata } from './best-thaisot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestThaisotOtServerKeywordPage />;
}
