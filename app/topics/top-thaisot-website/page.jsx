import TopThaisotWebsiteKeywordPage, { generateMetadata } from './top-thaisot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopThaisotWebsiteKeywordPage />;
}
