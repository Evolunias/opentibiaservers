import BestThaisotLoginKeywordPage, { generateMetadata } from './best-thaisot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestThaisotLoginKeywordPage />;
}
