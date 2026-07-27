import NewSeasonLumineraWebsiteKeywordPage, { generateMetadata } from './new-season-luminera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonLumineraWebsiteKeywordPage />;
}
