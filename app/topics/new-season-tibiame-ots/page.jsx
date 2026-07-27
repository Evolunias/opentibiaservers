import NewSeasonTibiameOtsKeywordPage, { generateMetadata } from './new-season-tibiame-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiameOtsKeywordPage />;
}
