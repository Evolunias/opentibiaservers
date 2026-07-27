import LowrateThaisotWebsiteKeywordPage, { generateMetadata } from './lowrate-thaisot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateThaisotWebsiteKeywordPage />;
}
