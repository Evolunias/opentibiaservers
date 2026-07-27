import NewSeasonTibiameClientKeywordPage, { generateMetadata } from './new-season-tibiame-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiameClientKeywordPage />;
}
