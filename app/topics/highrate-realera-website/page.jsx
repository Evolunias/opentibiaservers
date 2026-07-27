import HighrateRealeraWebsiteKeywordPage, { generateMetadata } from './highrate-realera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateRealeraWebsiteKeywordPage />;
}
