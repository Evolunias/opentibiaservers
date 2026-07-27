import FreshStartCanobWebsiteKeywordPage, { generateMetadata } from './fresh-start-canob-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCanobWebsiteKeywordPage />;
}
