import FreshStartUnlineWebsiteKeywordPage, { generateMetadata } from './fresh-start-unline-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartUnlineWebsiteKeywordPage />;
}
