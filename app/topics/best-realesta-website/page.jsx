import BestRealestaWebsiteKeywordPage, { generateMetadata } from './best-realesta-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRealestaWebsiteKeywordPage />;
}
