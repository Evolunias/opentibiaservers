import NewSeasonCoxaotWebsiteKeywordPage, { generateMetadata } from './new-season-coxaot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCoxaotWebsiteKeywordPage />;
}
