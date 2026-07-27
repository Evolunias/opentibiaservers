import BestThaisotClientKeywordPage, { generateMetadata } from './best-thaisot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestThaisotClientKeywordPage />;
}
