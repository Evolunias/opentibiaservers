import BestLumineraWebsiteKeywordPage, { generateMetadata } from './best-luminera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestLumineraWebsiteKeywordPage />;
}
