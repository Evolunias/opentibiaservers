import NewSeasonTibiameOtKeywordPage, { generateMetadata } from './new-season-tibiame-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiameOtKeywordPage />;
}
