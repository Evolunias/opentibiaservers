import HighrateRangerSArcaniWebsiteKeywordPage, { generateMetadata } from './highrate-ranger-s-arcani-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateRangerSArcaniWebsiteKeywordPage />;
}
