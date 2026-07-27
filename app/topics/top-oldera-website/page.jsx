import TopOlderaWebsiteKeywordPage, { generateMetadata } from './top-oldera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopOlderaWebsiteKeywordPage />;
}
