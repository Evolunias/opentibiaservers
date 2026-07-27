import ThaisotWebsiteKeywordPage, { generateMetadata } from './thaisot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotWebsiteKeywordPage />;
}
