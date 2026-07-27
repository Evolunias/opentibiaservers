import HighrateThaisotWebsiteKeywordPage, { generateMetadata } from './highrate-thaisot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateThaisotWebsiteKeywordPage />;
}
