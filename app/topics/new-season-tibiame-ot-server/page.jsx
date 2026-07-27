import NewSeasonTibiameOtServerKeywordPage, { generateMetadata } from './new-season-tibiame-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiameOtServerKeywordPage />;
}
