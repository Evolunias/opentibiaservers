import NewOlderaWebsiteKeywordPage, { generateMetadata } from './new-oldera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOlderaWebsiteKeywordPage />;
}
