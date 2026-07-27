import NewSeasonTibiascapeWebsiteKeywordPage, { generateMetadata } from './new-season-tibiascape-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiascapeWebsiteKeywordPage />;
}
