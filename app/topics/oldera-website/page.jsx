import OlderaWebsiteKeywordPage, { generateMetadata } from './oldera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaWebsiteKeywordPage />;
}
