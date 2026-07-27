import NewSeasonTibiameLoginKeywordPage, { generateMetadata } from './new-season-tibiame-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiameLoginKeywordPage />;
}
