import FreshStartOlderaWebsiteKeywordPage, { generateMetadata } from './fresh-start-oldera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartOlderaWebsiteKeywordPage />;
}
