import NewSeasonCyntaraWebsiteKeywordPage, { generateMetadata } from './new-season-cyntara-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCyntaraWebsiteKeywordPage />;
}
