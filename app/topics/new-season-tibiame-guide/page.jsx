import NewSeasonTibiameGuideKeywordPage, { generateMetadata } from './new-season-tibiame-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiameGuideKeywordPage />;
}
