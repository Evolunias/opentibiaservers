import NewSeasonTibiameOpenTibiaKeywordPage, { generateMetadata } from './new-season-tibiame-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiameOpenTibiaKeywordPage />;
}
