import FreshStartNilotWebsiteKeywordPage, { generateMetadata } from './fresh-start-nilot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartNilotWebsiteKeywordPage />;
}
