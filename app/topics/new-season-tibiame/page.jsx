import NewSeasonTibiameKeywordPage, { generateMetadata } from './new-season-tibiame';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiameKeywordPage />;
}
