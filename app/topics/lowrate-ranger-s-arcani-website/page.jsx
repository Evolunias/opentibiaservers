import LowrateRangerSArcaniWebsiteKeywordPage, { generateMetadata } from './lowrate-ranger-s-arcani-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateRangerSArcaniWebsiteKeywordPage />;
}
