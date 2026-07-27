import HighrateRealestaWebsiteKeywordPage, { generateMetadata } from './highrate-realesta-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateRealestaWebsiteKeywordPage />;
}
