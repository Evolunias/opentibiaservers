import HighrateImperianicWebsiteKeywordPage, { generateMetadata } from './highrate-imperianic-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateImperianicWebsiteKeywordPage />;
}
