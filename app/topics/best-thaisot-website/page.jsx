import BestThaisotWebsiteKeywordPage, { generateMetadata } from './best-thaisot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestThaisotWebsiteKeywordPage />;
}
