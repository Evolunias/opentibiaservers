import NewSeasonTibiameWebsiteKeywordPage, { generateMetadata } from './new-season-tibiame-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiameWebsiteKeywordPage />;
}
