import FreshStartTibiaraWebsiteKeywordPage, { generateMetadata } from './fresh-start-tibiara-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibiaraWebsiteKeywordPage />;
}
