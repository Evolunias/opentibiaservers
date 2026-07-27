import BestMidhemWebsiteKeywordPage, { generateMetadata } from './best-midhem-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMidhemWebsiteKeywordPage />;
}
