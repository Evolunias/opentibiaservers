import BestOlderaWebsiteKeywordPage, { generateMetadata } from './best-oldera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestOlderaWebsiteKeywordPage />;
}
