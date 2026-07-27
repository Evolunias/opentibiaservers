import BestRealeraWebsiteKeywordPage, { generateMetadata } from './best-realera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRealeraWebsiteKeywordPage />;
}
