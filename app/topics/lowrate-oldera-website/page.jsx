import LowrateOlderaWebsiteKeywordPage, { generateMetadata } from './lowrate-oldera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateOlderaWebsiteKeywordPage />;
}
